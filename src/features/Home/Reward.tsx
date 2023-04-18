import { AspectRatio, Box, Flex, Text, Title } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BgBox, BgCordiStake2Mb, BgCorfiStake, BgCorfiStake2, BgCorfiStakeMb } from "~/assets/images";
import { RewardWallet } from "~/assets/vectors";
import { ButtonCommon, Section } from "~/components";
import { links } from "~/constants";

export const Reward = () => {
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
        align={"center"}
        gap={24}
        py={{ base: 20, sm: 67 }}
        px={{ base: 15, lg: 100 }}
        direction={{ base: "column", sm: "row" }}
      >
        <Box w={"100%"} maw={563} py={{ base: 20, sm: 32 }} px={{ base: 14, sm: 28 }} pos={"relative"}>
          <Link href={""}>
            {" "}
            <Text data-aos="fade-up" mb={{ base: 12, sm: 8 }} fw={400} fz={{ base: 16, sm: 18 }}>
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
            data-aos="fade-up"
          >
            {" "}
            Get rewarded for providing protection.
          </Title>
          <Text data-aos="fade-up" opacity={0.8} fw={400} fz={{ base: 12, sm: 20 }}>
            Invest capital with Core-AntiRisk and earn additional rewards on already productive assets. Leverage dynamic
            risk assessment data to allocate funds safely and efficiently.
          </Text>

          <ButtonCommon
            mt={28}
            bg={
              "radial-gradient(65% 65% at 50% 50%, rgba(255, 255, 255, 0.24) 0%, rgba(255, 255, 255, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */, rgba(255, 255, 255, 0.04)"
            }
            sx={{
              border: "1px solid rgba(255, 255, 255, 0.1)",
            }}
            href={"https://docs.corefi.io/"}
            data-aos="fade-up"
          >
            Explore all ↗
          </ButtonCommon>
        </Box>

        <AspectRatio
          data-aos="fade-up"
          pos={"relative"}
          w={"100%"}
          maw={550}
          sx={{
            boxShadow:
              "0px 0px 1px rgba(0, 0, 0, 0.02), 0px 4px 8px rgba(0, 0, 0, 0.02), 0px 16px 24px rgba(0, 0, 0, 0.02), 0px 24px 32px rgba(0, 0, 0, 0.02)",
            borderRadius: "24px",
          }}
          // py={32}
          px={{ base: 0, sm: 28 }}
          ratio={557 / 189}
        >
          <RewardWallet />
        </AspectRatio>
      </Flex>
    </Box>
  );
};
