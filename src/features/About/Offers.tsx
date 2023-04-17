import { AspectRatio, BackgroundImage, Box, Center, Container, Flex, Text, Title } from "@mantine/core";
import Image from "next/image";
import React from "react";
import { HeroBg, HomeBg2, HomeBg2Mb, VidMobile, VideoExample } from "~/assets/images";
import { ButtonCommon, Section } from "~/components";
import { AdItem } from "~/constants/AdItem";

export const Offers = () => {
  return (
    <Section maw={1920}>
      <Container
        py={80}
        bg={"linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.0224) 100%)"}
        px={80}
        size={1537}
        sx={{ borderRadius: "24px" }}
      >
        <Title mb={32} fz={{ base: 24, sm: 56 }} ta={"center"}>
          What CoreFi offers?
        </Title>
        <Text ta={"center"} maw={1014} mx={"auto"} fz={{ sm: 24 }}>
          Core Finance allows token holders to play a critical role in building a wide base of stakeholders and
          capturing value created by new innovations on COREFI Network. COREFI holders stake and vote to receive trading
          fees from protocols in the network. As more trades are executed and new protocols added, more rewards are
          generated.
        </Text>
      </Container>
    </Section>
  );
};
