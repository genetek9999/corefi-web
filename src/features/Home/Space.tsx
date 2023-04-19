import { AspectRatio, Box, Flex, Text, Title } from "@mantine/core";
import { nanoid } from "nanoid";
import React from "react";
import { DarkBall } from "~/assets/vectors";
import { Section } from "~/components";
import { OfferContent } from "~/constants/HomeContent";

import VideoPlayer from "./Components/Video";

export const Space = () => {
  return (
    <Section py={0} mt={{ base: -300, lg: -150 }} mb={{ base: -350, lg: 0 }} px={0} maw={1920}>
      <Box h={706} pos={"relative"}>
        {" "}
        <AspectRatio
          ratio={1920 / 1152}
          w={"100%"}
          top={{ base: "200px", lg: "-100px" }}
          sx={{ transform: "translateX(-50%)", zIndex: -1 }}
          left={"50%"}
          pos={"absolute"}
        >
          <DarkBall />
          <VideoPlayer border={false} publicId="cards-video_ticydw" />
        </AspectRatio>
      </Box>
    </Section>
  );
};
