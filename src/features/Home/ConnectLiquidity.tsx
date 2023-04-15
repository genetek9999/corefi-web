import { AspectRatio, Box, Flex, Text, Title } from "@mantine/core";
import { nanoid } from "nanoid";
import React from "react";
import { ConnecLidityMb, ConnectLidity } from "~/assets/vectors";
import { Section } from "~/components";
import { OfferContent } from "~/constants/HomeContent";

export const ConnectLiquidity = () => {
  return (
    <Section>
      <Box w={"100%"} mx={"auto"} maw={1029}>
        {/* <AspectRatio left={52} ratio={1131 / 1396}>
          {" "}
          <ConnectLidity />
        </AspectRatio> */}
        <AspectRatio ratio={375 / 540}>
          <ConnecLidityMb />
        </AspectRatio>
      </Box>
    </Section>
  );
};
