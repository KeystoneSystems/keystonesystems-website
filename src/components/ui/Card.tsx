import { type HTMLAttributes } from "react";

type CardVariant = "default" | "dark" | "accent" | "bordered";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
  className?: string;
  children: React.ReactNode;
}

const variantClasses: Record<CardVariant, string> = {
  default: "bg-white rounded-xl border border-[#E8E4DF]",
  dark: "bg-[#1A1A1B] rounded-xl",
  accent: "bg-[#CD5C36] rounded-xl",
  bordered: "bg-white rounded-xl border-l-4 border-l-[#CD5C36] border border-[#E8E4DF]",
};

export function Card({ variant = "default", className = "", children, ...props }: CardProps) {
  return (
    <div className={`${variantClasses[variant]} ${className}`} {...props}>
      {children}
    </div>
  );
}
