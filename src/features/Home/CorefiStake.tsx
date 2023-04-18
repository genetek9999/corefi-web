import { AspectRatio, BackgroundImage, Box, Flex, Group, Text, Title } from "@mantine/core";
import { nanoid } from "nanoid";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BgBox, BgCordiStake2Mb, BgCorfiStake, BgCorfiStake2, BgCorfiStakeMb, BigBgBox } from "~/assets/images";
import { Dex } from "~/assets/vectors";
import { ButtonCommon, Section } from "~/components";
import { paths } from "~/constants";
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
          <Image style={{ zIndex: -1 }} src={BigBgBox} alt="" fill />
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

const Content = () => {
  const [isPc, setIsPc] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.screen.width > 800) {
        setIsPc(true);
      } else setIsPc(false);
    }
  }, []);
  return (
    <Box>
      <Flex
        gap={{ base: 24, lg: 0 }}
        pt={{ base: 20, sm: 67 }}
        pb={{ base: 20, sm: 45 }}
        pl={{ base: 15, lg: 100 }}
        pr={{ base: 15, lg: 78 }}
        direction={{ base: "column-reverse", sm: "row" }}
      >
        <Box w={"100%"} maw={563} h={427} py={{ base: 20, sm: 32 }} px={{ base: 14, sm: 28 }} pos={"relative"}>
          {" "}
          <Image style={{ zIndex: -1 }} src={isPc ? BgCorfiStake : BgCorfiStakeMb} alt="" fill />
          <Title mb={20} fz={{ base: 16, sm: 24 }}>
            Liquidity Vaults for long-term investors
          </Title>
          <Text fz={{ base: 12, sm: 16 }} opacity={0.8}>
            A next-generation AMM that offers capital efficiency to liquidity providers.
          </Text>
          <ButtonCommon
            mt={{ base: 20, sm: 48 }}
            bg={
              "radial-gradient(65% 65% at 50% 50%, rgba(255, 255, 255, 0.24) 0%, rgba(255, 255, 255, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */, rgba(255, 255, 255, 0.04)"
            }
            sx={{
              border: "1px solid rgba(255, 255, 255, 0.1)",
            }}
            href={paths.LIQUIDITY_VAULTS}
          >
            Explore all ↗
          </ButtonCommon>
        </Box>

        <Box
          mih={499}
          pos={"relative"}
          w={"100%"}
          sx={{
            boxShadow:
              "0px 0px 1px rgba(0, 0, 0, 0.02), 0px 4px 8px rgba(0, 0, 0, 0.02), 0px 16px 24px rgba(0, 0, 0, 0.02), 0px 24px 32px rgba(0, 0, 0, 0.02)",
            borderRadius: "24px",
          }}
          pb={32}
          pl={{ base: 0, sm: 28 }}
        >
          <Image style={{ zIndex: -1 }} src={isPc ? BgCorfiStake2 : BgCordiStake2Mb} alt="" fill />
          <Link href={""}>
            {" "}
            <Text mb={{ base: 12, sm: 8 }} fw={400} fz={{ base: 16, sm: 18 }}>
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
            mb={{ base: 20, sm: 28 }}
            fw={600}
            fz={{ base: 24, sm: 44 }}
          >
            {" "}
            CoreFi Stake
          </Title>
          <Text opacity={0.8} fw={400} fz={{ base: 12, sm: 16 }}>
            Stake COREFI to participate in network governance and be eligible for gas costs refunds.
          </Text>

          <ButtonCommon
            href={paths.STAKE}
            mt={28}
            bg={
              "radial-gradient(65% 65% at 50% 50%, rgba(255, 255, 255, 0.24) 0%, rgba(255, 255, 255, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */, rgba(255, 255, 255, 0.04)"
            }
            sx={{
              border: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            Stake now ↗
          </ButtonCommon>
        </Box>
      </Flex>
    </Box>
  );
};
