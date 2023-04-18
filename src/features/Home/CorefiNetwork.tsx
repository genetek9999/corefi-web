import { AspectRatio, BackgroundImage, Box, Flex, Group, Text, Title } from "@mantine/core";
import { nanoid } from "nanoid";
import Link from "next/link";
import React from "react";
import { BgBox } from "~/assets/images";
import { Dex } from "~/assets/vectors";
import { ButtonCommon, Section } from "~/components";
import { paths } from "~/constants";
import { NetworkContent1, OfferContent } from "~/constants/HomeContent";

export const CorefiNetwork = () => {
  return (
    <Section py={"unset"} mb={36} sx={{ zIndex: 10 }}>
      <Box display={{ base: "none", lg: "block" }}>
        <BackgroundImage
          h={448}
          bg={"linear-gradient(180deg, rgba(255, 255, 255, 0.0488) 0%, rgba(255, 255, 255, 0) 47.34%)"}
          src={BgBox.src}
        >
          <Content />
        </BackgroundImage>
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
    <Flex gap={54} py={67} px={{ base: 15, lg: 120 }} direction={{ base: "column", sm: "row" }}>
      <Box maw={454}>
        {" "}
        <Link href={NetworkContent1.link}>
          {" "}
          <Text mb={8} fw={400} fz={{ sm: 18 }}>
            {NetworkContent1.text}
          </Text>
        </Link>
        <Title mb={28} fw={600} fz={{ sm: 44 }}>
          {" "}
          {NetworkContent1.title}
        </Title>
        <Text opacity={0.8} fw={400} fz={{ sm: 20 }}>
          {NetworkContent1.content}
        </Text>
      </Box>

      <Box
        w={"100%"}
        maw={590}
        sx={{
          background: "rgba(255, 255, 255, 0.03)",
          boxShadow:
            "0px 0px 1px rgba(0, 0, 0, 0.02), 0px 4px 8px rgba(0, 0, 0, 0.02), 0px 16px 24px rgba(0, 0, 0, 0.02), 0px 24px 32px rgba(0, 0, 0, 0.02)",
          borderRadius: "24px",
          border: "1px solid rgba(255, 255, 255, 0.1)",
        }}
        py={32}
        // px={28}
      >
        <Flex px={28} align={"center"} gap={2} justify={"space-between"}>
          <Flex direction="column">
            <Text fz={{ sm: 24 }} fw={700}>
              20+
            </Text>

            <Text opacity={0.6} fz={{ sm: 20 }}>
              DEXS
            </Text>
          </Flex>

          <ButtonCommon
            href={paths.SWAP}
            bg={
              "radial-gradient(65% 65% at 50% 50%, rgba(255, 255, 255, 0.24) 0%, rgba(255, 255, 255, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */, rgba(255, 255, 255, 0.04)"
            }
            sx={{
              border: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            Start Trading ↗
          </ButtonCommon>
        </Flex>

        <AspectRatio w={"100%"} mt={36} ratio={590 / 99}>
          <Dex />
        </AspectRatio>
      </Box>
    </Flex>
  </Box>
);
