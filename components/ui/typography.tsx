import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface TypographyProps {
  variant: "h1" | "h2" | "h3" | "h4" | "p" | "blockquote" | "lead" | "small" | "muted";
  className?: string;
  children: ReactNode;
}

const typographyStyles = {
  h1: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
  h2: "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0",
  h3: "scroll-m-20 text-2xl font-semibold tracking-tight",
  h4: "scroll-m-20 text-xl font-semibold tracking-tight",
  p: "leading-7 [&:not(:first-child)]:mt-6",
  blockquote: "mt-6 border-l-2 pl-6 italic",
  lead: "text-xl text-muted-foreground",
  small: "text-sm font-medium leading-none",
  muted: "text-sm text-muted-foreground",
};

const tagMapping: Record<TypographyProps["variant"], keyof JSX.IntrinsicElements> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  p: "p",
  blockquote: "blockquote",
  lead: "p",
  small: "small",
  muted: "p",
};

export function Typography({ variant, className, children }: TypographyProps) {
  const Component = tagMapping[variant];

  return (
    <Component className={cn(typographyStyles[variant], className)}>
      {children}
    </Component>
  );
}
