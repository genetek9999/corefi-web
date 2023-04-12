import { AspectRatio, Box, Flex, Text, Title } from "@mantine/core";
import React, { useState } from "react";
import { Mission1 } from "~/assets/vectors";
import { Section } from "~/components";

import { Mission } from "./Components/Mission";

export const OurMission = () => {
  const [currentTab, setCurrentTab] = useState("");

  const handleChangeTab = (tab: string) => {
    setCurrentTab(tab);
  };

  return (
    <Section>
      <Box
        sx={{ borderRadius: "24px" }}
        bg={"linear-gradient(180deg, rgba(255, 255, 255, 0.0488) 0%, rgba(255, 255, 255, 0) 47.34%)"}
        px={{ base: 20, sm: 70 }}
        py={{ base: 20, sm: 50 }}
      >
        <Flex gap={20}>
          <Box w={"50%"}>
            <Text mb={12} fz={24} fw={400}>
              Our Mission
            </Text>
            <Title fz={{ sm: 56 }} fw={600}>
              Providing top-notch qualities
            </Title>

            <Text mt={67} fw={700} fz={18}>
              04
              <span style={{ color: "#887BE3" }}> - 06</span>
            </Text>

            <Flex>
              <Box></Box>
              <Flex>{}</Flex>
            </Flex>
          </Box>
          <Mission />
        </Flex>
      </Box>
    </Section>
  );
};
