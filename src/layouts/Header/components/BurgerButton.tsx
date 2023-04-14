import { AspectRatio, Box, type BoxProps, Drawer } from "@mantine/core";
import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { ButtonCommon } from "~/components";

import { ActionButtons } from "./ActionButtons";
import { NavMenu } from "./NavMenu";

export const BurgerButton: React.FC<BoxProps> = ({ ...props }) => {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Box {...props}>
        <ButtonCommon
          bg="rgba(255,255,255,0.2)"
          variant="filled"
          px={9}
          py={9}
          darkenHover
          onClick={() => setOpened(true)}
        >
          <AspectRatio ratio={1} w={18}>
            <AiOutlineMenu />
          </AspectRatio>
        </ButtonCommon>
      </Box>

      <Drawer
        opened={opened}
        position="right"
        size="100vw"
        onClose={() => setOpened(false)}
        sx={{
          ".mantine-Paper-root": {
            backdropFilter: "blur(20px)",
            background: "linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.0152) 100%)",
          },
          ".mantine-Drawer-closeButton": {
            marginTop: 20,
            marginRight: 25,
          },
        }}
      >
        <NavMenu variant="vertical" />

        <Box display={{ sm: "none" }} mt={20}>
          <ActionButtons position="center" />
        </Box>
      </Drawer>
    </>
  );
};
