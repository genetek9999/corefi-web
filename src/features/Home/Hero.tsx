import { AspectRatio, BackgroundImage, Box, Flex, Text, Title } from "@mantine/core";
import Image from "next/image";
import React from "react";
import { HeroBg, HomeBg2, HomeBg2Mb, VidMobile, VideoExample } from "~/assets/images";
import { ButtonCommon, Section } from "~/components";
import { paths } from "~/constants";
import { AdItem } from "~/constants/AdItem";

export const Hero = () => {
  return (
    <Section pb={0} px={0} maw={1920}>
      <Box
        sx={{
          overflow: "hidden",
        }}
        mah={{ base: 1750, sm: "unset" }}
      >
        <BackgroundImage sx={{ zIndex: 10 }} px={20} mb={{ base: 0, sm: 240 }} pt={85} src={HeroBg.src}>
          {" "}
          <Flex direction="column" align="center" justify="center">
            <Title
              sx={{
                background: " linear-gradient(180deg, #FFFFFF 22.5%, rgba(255, 255, 255, 0.7) 100%)",
                "-webkit-background-clip": "text",
                "-webkit-text-fill-color": "transparent",
                "background-clip": "text",
                "text-fill-color": "transparent",
              }}
              transform={"capitalize"}
              maw={913}
              ta={"center"}
              fz={{ sm: 64 }}
              // mt={87}
              fw={700}
              mb={30}
              data-aos="fade-up"
            >
              Making deFi accessible to everyone
            </Title>

            <Text data-aos="fade-up" fw={400} ta={"center"} maw={750} fz={20}>
              Be a DeFi Master with CoreFi. Swap, Earn, Stake, Yield Farming, Lending, Borrowing & Collaterals, all in
              one decentralized, community driven platform. Welcome home to DeFi.
            </Text>

            <ButtonCommon
              href={paths.SWAP}
              mt={30}
              bg={
                "radial-gradient(65% 65% at 50% 50%, rgba(255, 255, 255, 0.24) 0%, rgba(255, 255, 255, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */, rgba(255, 255, 255, 0.04)"
              }
              sx={{
                border: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              Launch DApp
            </ButtonCommon>

            <Box pt={88} w={"100%"} h={{ base: 700, sm: 600 }}>
              {/* thay video vao day */}
              <AspectRatio
                data-aos="fade-up"
                display={{ base: "none", sm: "block" }}
                maw={1200}
                mx={"auto"}
                ratio={1200 / 651}
              >
                <Image src={VideoExample} alt="" fill />
              </AspectRatio>

              <AspectRatio
                data-aos="fade-up"
                display={{ base: "block", sm: "none" }}
                maw={1200}
                mx={"auto"}
                ratio={750 / 1040}
              >
                <Image src={VidMobile} alt="" fill />
              </AspectRatio>

              {/* <Flex
                align={"center"}
                mt={20}
                maw={1128}
                w={"100%"}
                mx={"auto"}
                gap={{ base: 10, sm: 100 }}
                wrap={"wrap"}
                justify={"center"}
              >
                {AdItem.map((item) => item.svg)}
              </Flex> */}
            </Box>
          </Flex>{" "}
        </BackgroundImage>
        <Box>
          {" "}
          <BackgroundImage display={{ base: "none", sm: "block" }} src={HomeBg2.src}>
            <Box w={1920} h={794}></Box>
          </BackgroundImage>
          <BackgroundImage
            sx={{ backgroundRepeat: "no-repeat" }}
            display={{ base: "block", sm: "none" }}
            src={HomeBg2Mb.src}
          >
            <Box w={"100%"} h={582}></Box>
          </BackgroundImage>
        </Box>
      </Box>
    </Section>
  );
};
