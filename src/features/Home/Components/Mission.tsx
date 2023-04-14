import { AspectRatio, Box, Container, type ContainerProps, Flex, Text, Title } from "@mantine/core";
import React from "react";
import { Mission1 } from "~/assets/vectors";
import { type MissionProbs } from "~/type";

type Props = {
  test?: string;
  currentTab: MissionProbs;
};

export const Mission: React.FC<Props> = ({ currentTab, ...props }) => {
  return (
    <Flex
      pt={127}
      px={32}
      sx={{ borderRadius: "20px" }}
      w={{ base: "100%", lg: "50%" }}
      direction={"column"}
      bg={"linear-gradient(180deg, rgba(105, 70, 226, 0.1) 0%, rgba(105, 70, 226, 0) 100%)"}
      gap={60}
    >
      <AspectRatio w={"100%"} ratio={482 / 330}>
        {currentTab.svg}
      </AspectRatio>

      <Text fz={{ sm: 28 }} fw={500} ta={"center"}>
        {currentTab.content}
      </Text>
    </Flex>
  );
};
