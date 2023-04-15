import { AspectRatio, BackgroundImage, Box, Flex, Group, Text, Title } from "@mantine/core";
import { nanoid } from "nanoid";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BgBox, BgCorfiStake, BgCorfiStake2 } from "~/assets/images";
import { Dex } from "~/assets/vectors";
import { ButtonCommon, Section } from "~/components";
import { NetworkContent1, OfferContent } from "~/constants/HomeContent";

export const CorefiStake = () => {
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
        <Image style={{ zIndex: -1 }} src={BgCorfiStake} alt="" fill />
        <Title mb={20} fz={{ sm: 24 }}>
          Liquidity Vaults for long-term investors
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

      <Box
        mih={499}
        pos={"relative"}
        w={"100%"}
        maw={550}
        sx={{
          boxShadow:
            "0px 0px 1px rgba(0, 0, 0, 0.02), 0px 4px 8px rgba(0, 0, 0, 0.02), 0px 16px 24px rgba(0, 0, 0, 0.02), 0px 24px 32px rgba(0, 0, 0, 0.02)",
          borderRadius: "24px",
        }}
        py={32}
        px={28}
      >
        <Image style={{ zIndex: -1 }} src={BgCorfiStake2} alt="" fill />
        <Link href={""}>
          {" "}
          <Text mb={8} fw={400} fz={{ sm: 18 }}>
            COREFI NETWORK →
          </Text>
        </Link>
        <Title
          sx={{
            background: " linear-gradient(180deg, #FFFFFF 22.5%, rgba(255, 255, 255, 0.7) 100%)",
            "-webkit-background-clip": "text",
            "-webkit-text-fill-color": "transparent",
            "background-clip": "text",
          }}
          mb={28}
          fw={600}
          fz={{ sm: 44 }}
        >
          {" "}
          CoreFi Stake
        </Title>
        <Text opacity={0.8} fw={400} fz={{ sm: 20 }}>
          Stake COREFI to participate in network governance and be eligible for gas costs refunds.
        </Text>

        <ButtonCommon
          mt={28}
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
    </Flex>
  </Box>
);
