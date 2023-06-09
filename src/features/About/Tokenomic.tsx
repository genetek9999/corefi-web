import { AspectRatio, BackgroundImage, Box, Center, Container, Flex, Text, Title } from "@mantine/core";
import { nanoid } from "nanoid";
import Image from "next/image";
import React from "react";
import { HeroBg, HomeBg2, HomeBg2Mb, VidMobile, VideoExample } from "~/assets/images";
import { PartnerSvg, TokenomicSvg } from "~/assets/vectors";
import { ButtonCommon, Section } from "~/components";
import { OfferContentAbout } from "~/constants/AboutContent";
import { AdItem } from "~/constants/AdItem";

export const Tokenomic = () => {
  return (
    <Section maw={1920}>
      <Container
        py={{ base: 20, sm: 80 }}
        bg={"linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.0224) 100%)"}
        px={{ base: 20, sm: 80 }}
        size={1537}
        sx={{ borderRadius: "24px" }}
      >
        <Flex direction={{ base: "column", lg: "row" }} gap={70}>
          <Flex direction={"column"} justify={"center"} maw={446}>
            <Title data-aos="fade-up" mb={24} fw={600} fz={{ base: 24, sm: 56 }}>
              Tokenomics
            </Title>

            <Text data-aos="fade-up" mb={48} fz={{ base: 12, sm: 24 }}>
              The COREFI token is an integral part of the CoreFi ecosystem, serving as a key utility token that enables
              users to access a range of features and benefits.
            </Text>

            <Text data-aos="fade-up" c={"#CBC3FF"} mb={28} fz={{ base: 12, sm: 24 }}>
              The public token distribution.
            </Text>

            <Text data-aos="fade-up" c={"#CBC3FF"} mb={28} fz={{ base: 12, sm: 24 }}>
              Cross-chain incentives.
            </Text>

            <Text data-aos="fade-up" c={"#CBC3FF"} mb={40} fz={{ base: 12, sm: 24 }}>
              The Ecosystem Support Program.
            </Text>

            <Text data-aos="fade-up" fz={{ base: 12, sm: 24 }}>
              More information is available in our detailed Tokenomics article.
            </Text>
          </Flex>
          <TokenomicSvg data-aos="fade-up" />
        </Flex>
      </Container>
    </Section>
  );
};
