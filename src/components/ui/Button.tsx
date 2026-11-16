import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "inverse";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  className?: string;
  children: ReactNode;
}

interface ButtonLinkProps extends ButtonBaseProps {
  href: string;
  external?: boolean;
}

interface ButtonActionProps extends ButtonBaseProps {
  href?: undefined;
  type?: "button" | "submit";
  disabled?: boolean;
  isLoading?: boolean;
  onClick?: () => void;
}

export type ButtonProps = ButtonLinkProps | ButtonActionProps;

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary: "bg-brand text-white hover:bg-brand-hover",
  inverse: "bg-white text-ink hover:bg-pink-100",
};

const SIZE_CLASSES: Record<ButtonSize, string> = {
  sm: "h-[46px] px-[22px] text-t13",
  md: "h-12 px-8 text-t14",
  lg: "h-[50px] px-8 text-t14",
};

function Spinner() {
  return (
    <svg
      className="size-4 motion-safe:animate-spin"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="3" opacity="0.3" />
      <path d="M21 12a9 9 0 0 0-9-9" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export function Button(props: ButtonProps) {
  const { variant = "primary", size = "md", fullWidth = false, className, children } = props;

  const classes = cn(
    "inline-flex cursor-pointer items-center justify-center gap-2 rounded-full font-semibold whitespace-pre transition-colors duration-200",
    "disabled:cursor-not-allowed disabled:opacity-50",
    VARIANT_CLASSES[variant],
    SIZE_CLASSES[size],
    fullWidth && "w-full",
    className,
  );

  if (props.href !== undefined) {
    const externalProps = props.external
      ? { target: "_blank", rel: "noopener noreferrer" }
      : undefined;
    return (
      <Link href={props.href} className={classes} {...externalProps}>
        {children}
      </Link>
    );
  }

  const { type = "button", disabled = false, isLoading = false, onClick } = props;
  return (
    <button
      type={type}
      className={classes}
      disabled={disabled || isLoading}
      aria-busy={isLoading}
      onClick={onClick}
    >
      {isLoading ? <Spinner /> : null}
      {children}
    </button>
  );
}
