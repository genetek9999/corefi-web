import { Flex } from "@mantine/core";
import React from "react";
import { LogoBrand, Section } from "~/components";

export const MainHeader = () => {
  return (
    <Section
      py={25}
      size={1300}
      // pos="fixed" left={0} right={0}
    >
      <Flex justify={"space-between"}>
        <LogoBrand variant="text-horizontal" />
      </Flex>
    </Section>
  );
};
