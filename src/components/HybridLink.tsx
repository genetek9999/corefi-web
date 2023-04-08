import Link, { type LinkProps } from "next/link";
import React from "react";
import { paths } from "~/constants";

export type HybridLinkProps = Omit<LinkProps, "href"> & {
  children: React.ReactNode;
  href: string;
};

export const HybridLink: React.FC<HybridLinkProps> = ({ children, href, ...props }) => (
  <Link
    scroll={href === paths.HOME}
    {...(href !== paths.HOME && !href.includes("#") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    href={href}
    {...props}
  >
    {children}
  </Link>
);
