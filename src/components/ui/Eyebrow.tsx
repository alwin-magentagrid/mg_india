import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface EyebrowProps {
  children: ReactNode;
  tone?: "brand" | "onDark";
  className?: string;
}

export function Eyebrow({ children, tone = "brand", className }: EyebrowProps) {
  return (
    <p
      className={cn(
        "text-t11 font-semibold",
        tone === "brand" ? "text-brand" : "text-pink-300",
        className,
      )}
    >
      {children}
    </p>
  );
}
