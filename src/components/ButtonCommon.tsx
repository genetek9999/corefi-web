import {
  Box,
  Button,
  type ButtonProps,
  type CSSObject,
  type DefaultMantineColor,
  type MantineTheme,
  type Sx,
  type SystemProp,
} from "@mantine/core";
import type { PolymorphicComponentProps } from "@mantine/utils";
import React from "react";

import { HybridLink } from "./HybridLink";

export type ButtonCommonProps = PolymorphicComponentProps<"button", ButtonProps> & {
  href?: string;
  darkenHover?: boolean;
};

export const ButtonCommon: React.FC<ButtonCommonProps> = ({
  children,
  href = "",
  bg,
  sx,
  darkenHover = false,
  ...props
}) => {
  const ButtonComponent = () => (
    <Button
      sx={sxButton(bg, sx as Sx, darkenHover)}
      bg={bg}
      fz={{ base: 14 }}
      px={30}
      py={{ base: 13 }}
      fw={600}
      h="auto"
      {...props}
    >
      {children}
    </Button>
  );

  if (!href)
    return (
      <Box>
        <ButtonComponent />
      </Box>
    );

  return (
    <HybridLink href={href}>
      <ButtonComponent />
    </HybridLink>
  );
};

const sxButton = (_bg: SystemProp<DefaultMantineColor> | undefined, sx: Sx, darkenHover: boolean): Sx => {
  const defaultProps: Sx = {
    borderWidth: 2,
  };

  if (_bg && darkenHover) {
    const bg = _bg as string;

    return (theme: MantineTheme) => ({
      ...defaultProps,

      transition: "all 0.15s ease-in-out",

      "&:not([data-disabled])": theme.fn.hover({
        backgroundColor: theme.fn.darken(bg, 0.05),
      }) as CSSObject,

      ...sx,
    });
  }

  return { ...defaultProps, ...sx };
};
