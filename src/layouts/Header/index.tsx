import React from "react";
import { paths } from "~/constants";

import { FeatureHeader } from "./FeatureHeader";
import { MainHeader } from "./MainHeader";

const featurePaths = [paths.SWAP];

export const Header = () => {
  const { pathname } = window.location;

  if (featurePaths.includes(pathname)) return <FeatureHeader />;

  return <MainHeader />;
};
