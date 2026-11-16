"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { submitEnquiry } from "@/lib/api/enquiry";
import {
  DEFAULT_ENQUIRY_PLAN,
  validateEnquiry,
  type EnquiryErrors,
  type EnquiryField,
} from "@/lib/validateEnquiry";

export type EnquiryStatus = "idle" | "submitting" | "success" | "error";

export interface EnquiryFormValues {
  name: string;
  email: string;
  businessName: string;
  phone: string;
  plan: string;
  existingWebsite: string;
  message: string;
  consent: boolean;
  companyWebsite: string;
}

const INITIAL_VALUES: EnquiryFormValues = {
  name: "",
  email: "",
  businessName: "",
  phone: "",
  plan: DEFAULT_ENQUIRY_PLAN,
  existingWebsite: "",
  message: "",
  consent: false,
  companyWebsite: "",
};

const FIELD_ORDER: EnquiryField[] = [
  "name",
  "email",
  "businessName",
  "phone",
  "plan",
  "existingWebsite",
  "message",
  "consent",
];

export function useEnquiryForm() {
  const [values, setValues] = useState<EnquiryFormValues>(INITIAL_VALUES);
  const [errors, setErrors] = useState<EnquiryErrors>({});
  const [status, setStatus] = useState<EnquiryStatus>("idle");

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { target } = event;
    const { name } = target;
    const value = target instanceof HTMLInputElement && target.type === "checkbox" ? target.checked : target.value;
    setValues((previous) => ({ ...previous, [name]: value }));
    if (name in errors) {
      setErrors((previous) => ({ ...previous, [name]: undefined }));
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "submitting") return;

    const { data, errors: validationErrors } = validateEnquiry(values);
    if (!data) {
      setErrors(validationErrors);
      setStatus("idle");
      const firstInvalid = FIELD_ORDER.find((field) => validationErrors[field]);
      const invalidElement = firstInvalid ? event.currentTarget.elements.namedItem(firstInvalid) : null;
      if (invalidElement instanceof HTMLElement) invalidElement.focus();
      return;
    }

    setErrors({});
    setStatus("submitting");
    const result = await submitEnquiry(data, values.companyWebsite);

    if (result.status === "success") {
      setValues(INITIAL_VALUES);
      setStatus("success");
    } else if (result.status === "invalid") {
      setErrors(result.errors);
      setStatus("idle");
    } else {
      setStatus("error");
    }
  };

  return { values, errors, status, handleChange, handleSubmit };
}
