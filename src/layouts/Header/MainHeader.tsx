import { Box, Flex } from "@mantine/core";
import React from "react";
import { LogoBrand, Section } from "~/components";

import { ActionButtons, NavMenu } from "./components";

export const MainHeader = () => {
  return (
    <Section py={25} size={1300} pos="absolute" left={0} right={0}>
      <Flex gap={50} align="center">
        <Box sx={{ flex: 1 }}>
          <LogoBrand variant="text-horizontal" />
        </Box>

        <NavMenu display={{ base: "none", lg: "block" }} />

        <Box sx={{ flex: 1 }}>
          <Flex justify="end">
            <ActionButtons />
          </Flex>
        </Box>
      </Flex>
    </Section>
  );
};
