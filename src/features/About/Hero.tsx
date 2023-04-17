import { AspectRatio, BackgroundImage, Box, Center, Flex, Text, Title } from "@mantine/core";
import Image from "next/image";
import React from "react";
import { HeroBg, HomeBg2, HomeBg2Mb, VidMobile, VideoExample } from "~/assets/images";
import { ButtonCommon, Section } from "~/components";
import { AdItem } from "~/constants/AdItem";

export const Hero = () => {
  return (
    <Section maw={1920}>
      <Title ta={"center"} mb={24} fz={{ base: 30, sm: 64 }}>
        Kyber Network Crystal (KNC)
      </Title>

      <Text ta={"center"} maw={750} mx={"auto"} fz={20}>
        KNC is a utility and governance token and an integral part of Kyber Network. The glue that connects different
        stakeholders in Kyber&apos;s ecosystem.
      </Text>

      <Center>
        {" "}
        <ButtonCommon
          mt={30}
          bg={
            "radial-gradient(65% 65% at 50% 50%, rgba(255, 255, 255, 0.24) 0%, rgba(255, 255, 255, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */, rgba(255, 255, 255, 0.04)"
          }
          sx={{
            border: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          Learn More
        </ButtonCommon>
      </Center>
    </Section>
  );
};
