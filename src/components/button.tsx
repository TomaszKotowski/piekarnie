import clsx from "clsx";
import Link from "next/link";
import React, { PropsWithChildren } from "react";

const styles = clsx(
  "inline-block px-3 py-2 md:px-4 md:py-2 lg:px-6 lg:py-3",
  "text-sm font-medium text-white",
  "bg-indigo-600 border border-indigo-600 rounded",
  "active:text-indigo-500 hover:bg-transparent",
  "hover:text-indigo-600 focus:outline-none focus:ring",
);

export function Button({
  children,
  variant = "button",
  className = "",
  ...rest
}: PropsWithChildren<{
  href?: string;
  variant?: "button" | "link";
  className?: string;
}>) {
  const Tag = variant === "button" ? ("button" as React.ElementType) : Link;

  return (
    <Tag className={clsx(styles, className)} {...rest}>
      {variant === "button" ? children : <a className={styles}>{children}</a>}
    </Tag>
  );
}
