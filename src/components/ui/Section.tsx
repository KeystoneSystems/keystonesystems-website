import { type HTMLAttributes } from "react";

type SectionBackground = "white" | "warm" | "dark" | "terracotta";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  bg?: SectionBackground;
  id?: string;
  className?: string;
  innerClassName?: string;
  children: React.ReactNode;
}

const bgClasses: Record<SectionBackground, string> = {
  white: "bg-white",
  warm: "bg-[#F7F4F0]",
  dark: "bg-[#1A1A1B]",
  terracotta: "bg-[#CD5C36]",
};

export function Section({
  bg = "warm",
  id,
  className = "",
  innerClassName = "",
  children,
  ...props
}: SectionProps) {
  return (
    <section
      id={id}
      className={`${bgClasses[bg]} ${className}`}
      {...props}
    >
      <div className={`max-w-6xl mx-auto px-6 py-20 lg:px-8 ${innerClassName}`}>
        {children}
      </div>
    </section>
  );
}

interface EyebrowProps {
  children: React.ReactNode;
  light?: boolean;
}

export function Eyebrow({ children, light = false }: EyebrowProps) {
  return (
    <div
      className={`flex items-center gap-2 mb-3 text-xs font-bold tracking-widest uppercase font-heading ${
        light ? "text-[#CD5C36]" : "text-[#CD5C36]"
      }`}
    >
      <span className="block w-0.5 h-4 bg-[#CD5C36] rounded-full flex-shrink-0" />
      {children}
    </div>
  );
}
