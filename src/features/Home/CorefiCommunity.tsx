import { Box, Flex, Text, Title } from "@mantine/core";
import { nanoid } from "nanoid";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BgBox, BgCorfiCommunity, BgCorfiCommunityMb, BgCorfiStake2, BigBgBox } from "~/assets/images";
import { ButtonCommon, Section } from "~/components";
import { paths } from "~/constants";
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
      <Flex gap={24} py={{ base: 20, sm: 67 }} px={{ base: 15, lg: 100 }} direction={{ base: "column", sm: "row" }}>
        <Box w={"100%"} maw={563} mih={427} py={{ base: 20, sm: 32 }} px={{ base: 20, sm: 28 }} pos={"relative"}>
          {" "}
          <Image style={{ zIndex: -1 }} src={isPc ? BgCorfiCommunity : BgCorfiCommunityMb} alt="" fill />
          <Text data-aos="fade-up" mb={16} fw={400} fz={{ sm: 18 }}>
            COREFI NETWORK →
          </Text>
          <Title
            data-aos="fade-up"
            sx={{
              background: " linear-gradient(180deg, #FFFFFF 22.5%, rgba(255, 255, 255, 0.7) 100%)",
              "-webkit-background-clip": "text",
              "-webkit-text-fill-color": "transparent",
              "background-clip": "text",
            }}
            mb={20}
            fz={{ base: 24, sm: 32 }}
          >
            Governed by the community.
          </Title>
          <Text data-aos="fade-up" fz={{ base: 12, sm: 16 }} opacity={0.8}>
            The CoreFi Network is managed by a global community of COREFI token holders and delegates.
          </Text>
          <ButtonCommon
            mt={{ base: 20, sm: 48 }}
            bg={
              "radial-gradient(65% 65% at 50% 50%, rgba(255, 255, 255, 0.24) 0%, rgba(255, 255, 255, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */, rgba(255, 255, 255, 0.04)"
            }
            sx={{
              border: "1px solid rgba(255, 255, 255, 0.1)",
            }}
            href={paths.DAO}
            data-aos="fade-up"
          >
            Vote ↗
          </ButtonCommon>
        </Box>

        <Flex gap={24} direction={"column"} w={"100%"}>
          {CommunityContent.map((item) => (
            <Box
              data-aos="fade-up"
              p={25}
              sx={{ borderRadius: "24px", border: "1px solid rgba(255, 255, 255, 0.1)" }}
              key={nanoid()}
            >
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
};
