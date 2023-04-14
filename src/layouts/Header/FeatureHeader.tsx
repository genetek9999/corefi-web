import { Box, Flex, Group } from "@mantine/core";
import React from "react";
import { LogoBrand, Section } from "~/components";

import { ActionButtons, BurgerButton, NavMenu } from "./components";

export const FeatureHeader = () => {
  return (
    <Section fluid py={15} bg="rgba(255, 255, 255, 0.03);">
      <Flex align="center" gap={{ base: 20, lg: 50 }}>
        <LogoBrand variant="text-horizontal" />

        <Box display={{ base: "none", md: "block" }}>
          <NavMenu />
        </Box>

        <Box sx={{ flex: 1 }}>
          <Group position="right">
            <Box display={{ base: "none", sm: "block" }}>
              <ActionButtons />
            </Box>

            <BurgerButton display={{ md: "none" }} />
          </Group>
        </Box>
      </Flex>
    </Section>
  );
};
