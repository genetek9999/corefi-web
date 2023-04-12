import { AspectRatio, Flex } from "@mantine/core";
import React from "react";
import { Logo } from "~/assets/vectors";
import { Section } from "~/components";

export const MainHeader = () => {
  return (
    <Section py={25} size={1300} pos="fixed" left={0} right={0}>
      <Flex justify={"space-between"}>
        {" "}
        <AspectRatio w={105} ratio={105 / 28}>
          {" "}
          <Logo />
        </AspectRatio>
      </Flex>
    </Section>
  );
};
