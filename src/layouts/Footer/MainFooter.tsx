import { Box, Divider, Flex, Grid, Text } from "@mantine/core";
import { nanoid } from "nanoid";
import React from "react";
import { HybridLink, LogoBrand, Section } from "~/components";
import { menuMainFooter } from "~/constants";

import { SocialButtons } from "./components";

export const MainFooter = () => {
  return (
    <Box bg="#100623" pt={{ base: 50, sm: 80 }} pb={{ base: 20, sm: 50 }}>
      <Section size={1200} py={0}>
        <Flex
          gap={{ base: 30, sm: 60 }}
          direction={{ base: "column", md: "row" }}
          justify={{ base: "center", md: "space-between" }}
        >
          <Box maw={{ md: 350 }}>
            <LogoBrand variant="text-horizontal" mb={25} />

            <Text fz={14} lh="1.5em !important">
              Be a DeFi Master with CoreFi. Swap, Earn, Stake, Yield Farming, all in one decentralized, community driven
              platform. Welcome home to DeFi.
            </Text>
          </Box>

          <Grid maw={{ md: 600 }} w="100%">
            {menuMainFooter.map(({ category, menu }) => (
              <Grid.Col span={6} sm={4} key={nanoid()}>
                <Text fw="bold" mb={25}>
                  {category}
                </Text>

                <Flex direction="column" gap={15}>
                  {menu.map(({ label, link }) => (
                    <HybridLink key={nanoid()} href={link}>
                      <Text fz={14} fw={500} c="#9B96B0">
                        {label}
                      </Text>
                    </HybridLink>
                  ))}
                </Flex>
              </Grid.Col>
            ))}
          </Grid>
        </Flex>

        <Divider mt={{ base: 30, sm: 60 }} pb={{ base: 30, sm: 60 }} color="#A9A3C23D" />

        <Flex
          direction={{ base: "column-reverse", sm: "row" }}
          align="center"
          justify={{ base: "center", sm: "space-between" }}
          gap={15}
        >
          <Text fz={14}>&copy;2023 Powered by CoreFi</Text>

          <SocialButtons />
        </Flex>
      </Section>
    </Box>
  );
};
