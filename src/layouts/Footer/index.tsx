import React from "react";
import { paths } from "~/constants";

import { FeatureFooter } from "./FeatureFooter";
import { MainFooter } from "./MainFooter";

const featurePaths = [paths.SWAP];

export const Footer = () => {
  const { pathname } = window.location;

  if (featurePaths.includes(pathname)) return <FeatureFooter />;

  return <MainFooter />;
};
