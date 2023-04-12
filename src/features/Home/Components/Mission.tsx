import { AspectRatio, Box, Container, type ContainerProps, Flex, Text, Title } from "@mantine/core";
import React from "react";
import { Mission1 } from "~/assets/vectors";

type Props = {
  test?: string;
};

export const Mission: React.FC<Props> = ({ ...props }) => {
  return (
    <Flex
      pt={127}
      px={32}
      sx={{ borderRadius: "20px" }}
      w={"50%"}
      direction={"column"}
      bg={"linear-gradient(180deg, rgba(105, 70, 226, 0.1) 0%, rgba(105, 70, 226, 0) 100%)"}
      gap={60}
    >
      <AspectRatio w={"100%"} ratio={482 / 330}>
        <Mission1 />
      </AspectRatio>

      <Text fz={{ sm: 28 }} fw={500} ta={"center"}>
        Average transaction fee less than a penny
      </Text>
    </Flex>
  );
};
