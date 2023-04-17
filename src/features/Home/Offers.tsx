import { AspectRatio, Box, Flex, Text, Title } from "@mantine/core";
import { nanoid } from "nanoid";
import React from "react";
import { Section } from "~/components";
import { OfferContent } from "~/constants/HomeContent";

export const Offers = () => {
  return (
    <Section>
      {/* <Box w={100} bg={"red"} h={100}></Box> */}
      <Box
        maw={290}
        sx={{
          border: "1px solid rgba(255, 255, 255, 0.04)",
          borderRadius: "999px",
        }}
        mx={"auto"}
        mb={12}
        py={5}
        px={16}
        bg={" rgba(255, 255, 255, 0.06);    "}
      >
        <Text tt={"uppercase"} ta={"center"} fz={14} fw={600}>
          Magic Happens by Data Science
        </Text>
      </Box>

      <Title mb={60} ta={"center"} fw={700} fz={{ sm: 56 }}>
        What CoreFi offers?
      </Title>

      <Flex wrap={{ base: "wrap", lg: "unset" }} gap={30} justify={"center"}>
        {OfferContent.map((item) => (
          <Flex
            w={{ base: "100%", sm: "33.33%" }}
            sx={{
              border: "1px solid rgba(255, 255, 255, 0.2)",
              borderRadius: " 16px",
            }}
            bg={"#0A0118"}
            p={16}
            pt={0}
            key={nanoid()}
            direction={"column"}
          >
            <AspectRatio w={"100%"} mb={24} ratio={366 / 202}>
              {item.pic}
            </AspectRatio>

            <Text mb={8} fw={600} fz={16}>
              {item.title}
            </Text>

            <Text c={"#9B96B0"} fw={400} fz={14}>
              {item.content}
            </Text>
          </Flex>
        ))}
      </Flex>

      <Text ta={"center"} fw={400} fz={{ sm: 24 }} mt={60}>
        All Powered by CoreFi
      </Text>
    </Section>
  );
};
