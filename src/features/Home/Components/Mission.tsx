import { AspectRatio, Flex, type FlexProps, Text } from "@mantine/core";
import React from "react";
import { type MissionProps } from "~/type";

type Props = FlexProps & {
  test?: string;
  currentTab: MissionProps;
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
      {...props}
    >
      <AspectRatio data-aos="fade-up" w={"100%"} ratio={482 / 330}>
        {currentTab.svg}
      </AspectRatio>

      <Text data-aos="fade-up" fz={{ sm: 28 }} fw={500} ta={"center"}>
        {currentTab.content}
      </Text>
    </Flex>
  );
};
