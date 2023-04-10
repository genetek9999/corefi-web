import React from "react";
import { paths } from "~/constants";

import { FeatureHeader } from "./FeatureHeader";
import { MainHeader } from "./MainHeader";

const featurePaths = [paths.STAKE, paths.SWAP, paths.DAO, paths.CAMPAIGNS];

export const Header = () => {
  const { pathname } = window.location;

  if (featurePaths.includes(pathname)) return <FeatureHeader />;

  return <MainHeader />;
};
