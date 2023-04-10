import { BackgroundImage, type BackgroundImageProps } from "@mantine/core";
import React from "react";
import { GalaxyLayer } from "~/assets/images";

type Props = Omit<BackgroundImageProps, "src">;

export const GalaxyBg: React.FC<Props> = ({ children }) => {
  return (
    <BackgroundImage
      src={GalaxyLayer.src}
      sx={{
        backgroundPositionY: "top",
        backgroundPositionX: "center",
        backgroundSize: "auto",
        backgroundRepeat: "no-repeat",
      }}
    >
      {children}
    </BackgroundImage>
  );
};
