import { AspectRatio, BackgroundImage, Box, Center, Container, Flex, Text, Title } from "@mantine/core";
import { nanoid } from "nanoid";
import Image from "next/image";
import React from "react";
import { HeroBg, HomeBg2, HomeBg2Mb, VidMobile, VideoExample } from "~/assets/images";
import { PartnerSvg } from "~/assets/vectors";
import { ButtonCommon, Section } from "~/components";
import { OfferContentAbout } from "~/constants/AboutContent";
import { AdItem } from "~/constants/AdItem";

export const Partner = () => {
  return (
    <Section maw={1920}>
      <Container
        py={{ base: 20, sm: 80 }}
        bg={"linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.0224) 100%)"}
        px={{ base: 20, sm: 80 }}
        size={1537}
        sx={{ borderRadius: "24px" }}
      >
        <Title mb={16} fz={{ base: 24, sm: 56 }} ta={"center"}>
          Partner
        </Title>
        <Text mb={32} c="#A09FAF" ta={"center"} maw={1014} mx={"auto"} fz={{ sm: 24 }}>
          Join the industry leaders to discuss where the markets are heading. We accept token payments.
        </Text>

        <PartnerSvg />
      </Container>
    </Section>
  );
};
