import { BackgroundImage, Box, Center, Flex, Text, Title } from "@mantine/core";
import React from "react";
import { SpaceBg } from "~/assets/images";
import { colors } from "~/constants";

import { LogoBrand } from "./LogoBrand";

const TITLE = "Where we’re going";
const DESC =
  "The crypto economy is a radical new imagining of the future of work. Open protocols will create transparency and opportunity, enabling anyone in the world contribute their talents to a global economy. We want to support this vision and help developers build the new coordination mechanisms of the internet age.";

type Props = {
  title?: string;
  desc?: string;
};

export const SpaceSection: React.FC<Props> = ({ desc = DESC, title = TITLE }) => {
  return (
    <BackgroundImage src={SpaceBg.src} h={665} p={25} sx={{ borderRadius: 15 }}>
      <Flex direction="column" justify="center" align="center" h="100%">
        <Center
          w={130}
          h={130}
          sx={{ borderRadius: 20, border: `4px solid ${colors.PRIMARY_COLOR}` }}
          bg="linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 100%)"
        >
          <LogoBrand variant="text-vertical" />
        </Center>

        <Title order={2} my={20} fz={{ base: 30, sm: 48 }}>
          {title}
        </Title>

        <Text ta="center" maw={660} mx="auto">
          {desc}
        </Text>
      </Flex>
    </BackgroundImage>
  );
};
