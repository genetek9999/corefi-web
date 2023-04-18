import { AspectRatio, BackgroundImage, Box, Center, Flex, Text, Title } from "@mantine/core";
import { nanoid } from "nanoid";
import Image from "next/image";
import React from "react";
import { HeroBg, HomeBg2, HomeBg2Mb, VidMobile, VideoExample } from "~/assets/images";
import { RoadMapSvg } from "~/assets/vectors";
import { ButtonCommon, Section } from "~/components";
import { RoadmapContent } from "~/constants/AboutContent";
import { AdItem } from "~/constants/AdItem";

export const RoadMap = () => {
  return (
    <Section maw={1920}>
      <Title ta={"center"} fz={{ base: 24, sm: 56 }}>
        Road map
      </Title>
      <Text mb={60} maw={690} mx={"auto"} ta={"center"} mt={16} c={"#A09FAF"} fz={{ base: 12, sm: 17 }}>
        The use of crypto-currencies has become more widespread, and they are now increasingly accepted as a legitimate
        for transactions.
      </Text>

      <Box display={{ base: "none", sm: "block" }}>
        {" "}
        <AspectRatio ratio={1541 / 1509}>
          <RoadMapSvg />
        </AspectRatio>
      </Box>

      <Box display={{ base: "block", sm: "none" }}>
        <Flex gap={30} direction={"column"}>
          {RoadmapContent.map((item) => (
            <Box
              p={20}
              bg={
                "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.02) 0.01%, rgba(255, 255, 255, 0.1) 100%)"
              }
              sx={{ borderRadius: "20px" }}
              key={nanoid()}
            >
              <Text mb={4} c={"#A09FAF"} fz={12}>
                {item.subTxt}
              </Text>

              <Title fz={22}>{item.title}</Title>

              <ul style={{ paddingLeft: "18px" }}>
                {item.content.map((content) => (
                  <li style={{ marginBottom: "12px" }} key={nanoid()}>
                    {content}
                  </li>
                ))}
              </ul>
            </Box>
          ))}
        </Flex>
      </Box>
    </Section>
  );
};
