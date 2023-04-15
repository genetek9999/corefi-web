import { Box, Flex, Text, Title } from "@mantine/core";
import { nanoid } from "nanoid";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BgBox, BgCorfiCommunity, BgCorfiStake2 } from "~/assets/images";
import { ButtonCommon, Section } from "~/components";
import { CommunityContent } from "~/constants/HomeContent";

export const CorefiCommunity = () => {
  return (
    <Section mb={36} py={0} sx={{ zIndex: 10 }}>
      <Box>
        <Box
          display={{ base: "none", lg: "block" }}
          pos={"relative"}
          // h={448}
        >
          <Image style={{ zIndex: -1 }} src={BgBox} alt="" fill />
          <Content />
        </Box>
      </Box>

      <Box
        bg={"linear-gradient(180deg, rgba(255, 255, 255, 0.0488) 0%, rgba(255, 255, 255, 0) 47.34%)"}
        display={{ base: "block", lg: "none" }}
        sx={{ borderRadius: "24px", border: "1px solid rgba(255, 255, 255, 0.1)" }}
      >
        <Content />
      </Box>
    </Section>
  );
};

const Content = () => (
  <Box>
    <Flex gap={24} py={{ base: 20, sm: 67 }} px={{ base: 15, lg: 100 }} direction={{ base: "column", sm: "row" }}>
      <Box w={"100%"} maw={563} mih={427} py={{ base: 20, sm: 32 }} px={{ base: 20, sm: 28 }} pos={"relative"}>
        {" "}
        <Image style={{ zIndex: -1 }} src={BgCorfiCommunity} alt="" fill />
        <Text mb={16} fw={400} fz={{ sm: 18 }}>
          COREFI NETWORK →
        </Text>
        <Title
          sx={{
            background: " linear-gradient(180deg, #FFFFFF 22.5%, rgba(255, 255, 255, 0.7) 100%)",
            "-webkit-background-clip": "text",
            "-webkit-text-fill-color": "transparent",
            "background-clip": "text",
          }}
          mb={20}
          fz={{ sm: 32 }}
        >
          Governed by the community.
        </Title>
        <Text fz={16} opacity={0.8}>
          A next-generation AMM that offers capital efficiency to liquidity providers.
        </Text>
        <ButtonCommon
          mt={48}
          bg={
            "radial-gradient(65% 65% at 50% 50%, rgba(255, 255, 255, 0.24) 0%, rgba(255, 255, 255, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */, rgba(255, 255, 255, 0.04)"
          }
          sx={{
            border: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          Explore all ↗
        </ButtonCommon>
      </Box>

      <Flex gap={24} direction={"column"} w={"100%"}>
        {CommunityContent.map((item) => (
          <Box p={25} sx={{ borderRadius: "24px", border: "1px solid rgba(255, 255, 255, 0.1)" }} key={nanoid()}>
            <Title mb={13} fz={{ sm: 20 }}>
              {" "}
              {item.title}
            </Title>

            <Text opacity={0.8} fz={16}>
              Participate by proposing upgrades and discussing the future of the network with the CoreFi community.
            </Text>
          </Box>
        ))}
      </Flex>
    </Flex>
  </Box>
);
