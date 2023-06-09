import { AspectRatio, type AspectRatioProps } from "@mantine/core";
import Image from "next/image";
import React from "react";
import { LogoAlter } from "~/assets/images";
import { Logo, LogoTextHorizontal, LogoTextVertical } from "~/assets/vectors";
import { paths } from "~/constants";

import { HybridLink } from "./HybridLink";

type Props = Omit<AspectRatioProps, "ratio"> & {
  variant?: "default" | "text-horizontal" | "text-vertical";
};

export const LogoBrand: React.FC<Props> = ({ variant = "default", ...props }) => {
  return (
    <HybridLink href={paths.HOME}>
      <LogoComponent variant={variant} {...props} />
    </HybridLink>
  );
};

const LogoComponent: React.FC<Props> = ({ variant, ...props }) => {
  switch (variant) {
    case "text-horizontal":
      return (
        <AspectRatio w={116} ratio={116 / 40} {...props}>
          <LogoTextHorizontal />
        </AspectRatio>
      );

    case "text-vertical":
      return (
        <AspectRatio w={58} ratio={59 / 92} {...props}>
          <Image src={LogoAlter} alt="" fill />
        </AspectRatio>
      );

    default:
      return (
        <AspectRatio w={35} ratio={35 / 40} {...props}>
          <Logo />
        </AspectRatio>
      );
  }
};
