import { Flex, Title } from "@mantine/core";
import React from "react";
import { MetamaskSection, Section } from "~/components";
import { configs } from "~/constants";

export const Hero = () => {
  return (
    <Section h="100vh">
      <Flex direction="column" align="center" justify="center" h="50%">
        <Title mb={50}>Welcome to Project Base T3 Mantine Web3</Title>

        {configs.ON_METAMASK && <MetamaskSection />}
      </Flex>
    </Section>
  );
};
