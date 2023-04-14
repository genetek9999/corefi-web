import { Box, Flex, Text } from "@mantine/core";
import React from "react";
import { Section } from "~/components";

import { SocialButtons } from "./components";

export const FeatureFooter = () => {
  return (
    <Box bg="#100623">
      <Section size={1450} py={25}>
        <Flex
          direction={{ base: "column-reverse", sm: "row" }}
          align="center"
          justify={{ base: "center", sm: "space-between" }}
          gap={15}
        >
          <Text fz={14} lh="1em !important">
            &copy;2023 Powered by CoreFi
          </Text>

          <SocialButtons />
        </Flex>
      </Section>
    </Box>
  );
};
