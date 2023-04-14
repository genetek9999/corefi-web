import { Box, Flex } from "@mantine/core";
import React from "react";
import { LogoBrand, Section } from "~/components";

import { ActionButtons, BurgerButton, NavMenu } from "./components";

export const MainHeader = () => {
  return (
    <Section py={25} size={1300} pos="absolute" left={0} right={0}>
      <Flex gap={50} align="center">
        <Box sx={{ flex: 1 }}>
          <LogoBrand variant="text-horizontal" />
        </Box>

        <NavMenu display={{ base: "none", md: "block" }} />

        <Box sx={{ flex: 1 }}>
          <Flex justify="end" align="center" gap={20}>
            <Box display={{ base: "none", sm: "block" }}>
              <ActionButtons />
            </Box>

            <BurgerButton display={{ md: "none" }} />
          </Flex>
        </Box>
      </Flex>
    </Section>
  );
};
