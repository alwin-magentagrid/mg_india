"use client";

import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { CONTACT_FORM } from "@/content/contact";
import { useEnquiryForm } from "@/features/contact/useEnquiryForm";
import {
  ENQUIRY_PLANS,
  ENQUIRY_PLAN_LABELS,
  MESSAGE_MAX_LENGTH,
  type EnquiryField,
} from "@/lib/validateEnquiry";
import { cn } from "@/lib/cn";

interface FieldProps {
  field: EnquiryField;
  label: string;
  error?: string;
  hint?: string;
  required?: boolean;
  optional?: boolean;
  children: (describedBy: string | undefined) => ReactNode;
}

const ERROR_TEXT = "text-t13 font-medium text-[#b3261e]";

function Field({ field, label, error, hint, required = false, optional = false, children }: FieldProps) {
  const errorId = `${field}-error`;
  const hintId = `${field}-hint`;
  const describedBy = [error ? errorId : null, hint ? hintId : null].filter(Boolean).join(" ") || undefined;

  return (
    <div className="flex flex-col gap-[10px]">
      <label htmlFor={field} className="text-t14 font-medium text-ink">
        {label}
        {required ? <span className="font-normal text-muted"> *</span> : null}
        {optional ? <span className="font-normal text-muted"> (optional)</span> : null}
      </label>
      {children(describedBy)}
      {hint ? (
        <p id={hintId} className="-mt-[2px] text-t12 leading-[1.5] text-muted">
          {hint}
        </p>
      ) : null}
      {error ? (
        <p id={errorId} className={ERROR_TEXT}>
          {error}
        </p>
      ) : null}
    </div>
  );
}

const INPUT_CLASSES =
  "h-14 w-full rounded-[12px] border border-line bg-white px-4 text-t16 leading-[1.5] text-ink transition-colors duration-200 placeholder:text-muted hover:border-plum-line focus:border-brand disabled:cursor-not-allowed disabled:opacity-50 sm:text-t15";

const { labels, placeholders } = CONTACT_FORM;

export function ContactForm() {
  const { values, errors, status, handleChange, handleSubmit } = useEnquiryForm();
  const isSubmitting = status === "submitting";

  if (status === "success") {
    return (
      <div role="status" className="rounded-[20px] bg-blush p-8">
        <p className="text-t23 font-semibold text-ink">Thank you. Your enquiry is on its way.</p>
        <p className="mt-3 text-t16 text-muted-strong">
          We&rsquo;ll reply to the email address you shared as soon as we can.
        </p>
      </div>
    );
  }

  const inputProps = (field: Exclude<EnquiryField, "consent">) => ({
    id: field,
    name: field,
    value: values[field],
    onChange: handleChange,
    disabled: isSubmitting,
    "aria-invalid": Boolean(errors[field]),
  });

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6" aria-busy={isSubmitting}>
      <div className="flex flex-col gap-2">
        <h2 id="enquiry-form-heading" className="text-[1.875rem] leading-[1.2] tracking-[-1px] text-ink">
          {CONTACT_FORM.title}
        </h2>
        <p className="text-t13 leading-[1.5] text-muted">{CONTACT_FORM.intro}</p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field field="name" label={labels.name} required error={errors.name}>
          {(describedBy) => (
            <input
              {...inputProps("name")}
              type="text"
              autoComplete="name"
              required
              placeholder={placeholders.name}
              aria-describedby={describedBy}
              className={cn(INPUT_CLASSES, errors.name && "border-[#b3261e]")}
            />
          )}
        </Field>
        <Field field="email" label={labels.email} required error={errors.email}>
          {(describedBy) => (
            <input
              {...inputProps("email")}
              type="email"
              autoComplete="email"
              inputMode="email"
              required
              placeholder={placeholders.email}
              aria-describedby={describedBy}
              className={cn(INPUT_CLASSES, errors.email && "border-[#b3261e]")}
            />
          )}
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-[3fr_2fr]">
        <Field field="businessName" label={labels.businessName} required error={errors.businessName}>
          {(describedBy) => (
            <input
              {...inputProps("businessName")}
              type="text"
              autoComplete="organization"
              required
              placeholder={placeholders.businessName}
              aria-describedby={describedBy}
              className={cn(INPUT_CLASSES, errors.businessName && "border-[#b3261e]")}
            />
          )}
        </Field>
        <Field field="phone" label={labels.phone} optional error={errors.phone}>
          {(describedBy) => (
            <input
              {...inputProps("phone")}
              type="tel"
              autoComplete="tel"
              inputMode="tel"
              placeholder={placeholders.phone}
              aria-describedby={describedBy}
              className={cn(INPUT_CLASSES, errors.phone && "border-[#b3261e]")}
            />
          )}
        </Field>
      </div>

      <Field field="plan" label={labels.plan} required hint={CONTACT_FORM.planHint} error={errors.plan}>
        {(describedBy) => (
          <div className="relative">
            <select
              {...inputProps("plan")}
              aria-describedby={describedBy}
              className={cn(INPUT_CLASSES, "cursor-pointer appearance-none pr-12")}
            >
              {ENQUIRY_PLANS.map((plan) => (
                <option key={plan} value={plan}>
                  {ENQUIRY_PLAN_LABELS[plan]}
                </option>
              ))}
            </select>
            <Image
              src="/icons/contact/chevron-down.svg"
              alt=""
              width={18}
              height={18}
              className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2"
            />
          </div>
        )}
      </Field>

      <Field field="existingWebsite" label={labels.existingWebsite} optional error={errors.existingWebsite}>
        {(describedBy) => (
          <input
            {...inputProps("existingWebsite")}
            type="url"
            inputMode="url"
            autoComplete="url"
            placeholder={placeholders.existingWebsite}
            aria-describedby={describedBy}
            className={cn(INPUT_CLASSES, errors.existingWebsite && "border-[#b3261e]")}
          />
        )}
      </Field>

      <Field field="message" label={labels.message} required error={errors.message}>
        {(describedBy) => (
          <textarea
            {...inputProps("message")}
            rows={5}
            required
            maxLength={MESSAGE_MAX_LENGTH}
            placeholder={placeholders.message}
            aria-describedby={describedBy}
            className={cn(INPUT_CLASSES, "h-[138px] resize-y py-4", errors.message && "border-[#b3261e]")}
          />
        )}
      </Field>

      <div className="flex flex-col gap-2">
        <div className="flex items-start gap-3">
          <input
            id="consent"
            name="consent"
            type="checkbox"
            checked={values.consent}
            onChange={handleChange}
            disabled={isSubmitting}
            aria-invalid={Boolean(errors.consent)}
            aria-describedby={errors.consent ? "consent-error" : undefined}
            className="mt-[2px] size-5 shrink-0 cursor-pointer rounded-[4px] border border-[#bc9fcd] accent-brand"
          />
          <label htmlFor="consent" className="text-t13 leading-[1.65] text-muted">
            {CONTACT_FORM.consentLead}
            <Link
              href="/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand underline transition-colors duration-200 hover:text-brand-hover"
            >
              {CONTACT_FORM.consentLink}
            </Link>
            {CONTACT_FORM.consentRest}
            <span aria-hidden="true"> *</span>
          </label>
        </div>
        {errors.consent ? (
          <p id="consent-error" className={ERROR_TEXT}>
            {errors.consent}
          </p>
        ) : null}
      </div>

      <div className="sr-only">
        <label htmlFor="companyWebsite">Leave this field empty</label>
        <input
          id="companyWebsite"
          name="companyWebsite"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={values.companyWebsite}
          onChange={handleChange}
        />
      </div>

      <div aria-live="polite" className="empty:hidden">
        {status === "error" ? (
          <p role="alert" className="text-t14 font-medium text-[#b3261e]">
            We couldn&rsquo;t send your enquiry. Please try again, or email us directly.
          </p>
        ) : null}
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex h-[60px] cursor-pointer items-center gap-5 rounded-full bg-brand px-7 text-t15 font-semibold text-white transition-colors duration-200 hover:bg-brand-hover disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? "Sending…" : CONTACT_FORM.submit}
          <Image src="/icons/arrow-right.svg" alt="" width={18} height={18} />
        </button>
        <p className="text-t12 text-muted">{CONTACT_FORM.submitNote}</p>
      </div>
    </form>
  );
}
