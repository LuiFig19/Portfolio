import { type HTMLAttributes } from "react";
import clsx from "clsx";

type MonoLabelProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: "default" | "accent" | "muted";
  bracket?: boolean;
};

export function MonoLabel({
  variant = "default",
  bracket = true,
  className,
  children,
  ...rest
}: MonoLabelProps) {
  const colorClass =
    variant === "accent"
      ? "text-accent"
      : variant === "muted"
      ? "text-fg-tertiary"
      : "text-fg-secondary";

  return (
    <span
      {...rest}
      className={clsx("font-mono text-mono uppercase tracking-mono", colorClass, className)}
    >
      {bracket ? `[ ${children} ]` : children}
    </span>
  );
}
