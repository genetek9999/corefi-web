import Link, { type LinkProps } from "next/link";
import React from "react";
import { menuFeatureHeader, paths } from "~/constants";

export type HybridLinkProps = Omit<LinkProps, "href"> & {
  children: React.ReactNode;
  href: string;
};

const featurePaths = menuFeatureHeader.map(({ link }) => link);

export const HybridLink: React.FC<HybridLinkProps> = ({ children, href, ...props }) => {
  return (
    <Link
      scroll={href === paths.HOME}
      {...(featurePaths.includes(href) && window.location.pathname === "/"
        ? {}
        : href !== paths.HOME && !href.includes("#")
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
      href={href}
      {...props}
    >
      {children}
    </Link>
  );
};
