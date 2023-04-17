import { AspectRatio, Box, Flex, Group, Text, Title } from "@mantine/core";
import { nanoid } from "nanoid";
import Image from "next/image";
import React from "react";
import { BgBox2 } from "~/assets/images";
import { ConnecLidityMb, ConnectLidity, Diagram, DiagramMb, Dot } from "~/assets/vectors";
import { Section } from "~/components";
import { HowItWorkContent, OfferContent } from "~/constants/HomeContent";

export const HowItWork = () => {
  return (
    <Section>
      <Box>
        <Title
          ta={"center"}
          fz={{ base: 24, sm: 56 }}
          sx={{
            background: "linear-gradient(180deg, #FFFFFF 22.5%, rgba(255, 255, 255, 0.7) 100%)",
            "-webkit-background-clip": "text",
            "-webkit-text-fill-color": "transparent",
            "background-clip": "text",
            "text-fill-color": "transparent",
          }}
        >
          How It work
        </Title>
        <Box display={{ base: "none", sm: "block" }}>
          {" "}
          <Flex mb={30} px={{ sm: 40 }} py={{ sm: 42 }} gap={30} direction={"column"} pos={"relative"}>
            <Image src={BgBox2} alt="" fill />
            {HowItWorkContent.map((item) => (
              <Group key={nanoid()}>
                <Dot />
                {item.content}
              </Group>
            ))}
          </Flex>
        </Box>

        <Box display={{ base: "block", sm: "none" }}>
          {" "}
          <Flex mt={30} mb={30} direction={"column"} gap={20}>
            {" "}
            {HowItWorkContent.map((item) => (
              <Box
                w={"100%"}
                bg={
                  "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.02) 0.01%, rgba(255, 255, 255, 0.1) 100%)"
                }
                sx={{
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "24px",
                }}
                pos={"relative"}
                key={nanoid()}
                py={17}
                px={20}
              >
                <Text fw={500} fz={14} maw={283} mx={"auto"} ta={"center"}>
                  {" "}
                  {item.content}
                </Text>
              </Box>
            ))}
          </Flex>
        </Box>

        <Box display={{ base: "none", sm: "block" }}>
          <Diagram />
        </Box>

        <Box display={{ base: "block", sm: "none" }}>
          <DiagramMb />
        </Box>
      </Box>
    </Section>
  );
};
