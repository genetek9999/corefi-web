import { Center, Text, Title } from "@mantine/core";
import React from "react";
import { ButtonCommon } from "~/components";

export const Hero = () => {
  return (
    <>
      <Title order={1} tt="capitalize" ta="center" maw={900} mx="auto" fz={{ base: 40, sm: 64 }} mt={50}>
        Liquidity Vaults for long-term investors
      </Title>

      <Text fz={{ sm: 20 }} ta="center" mt={20} mb={40}>
        The easiest way to provide liquidity on Uniswap V3
      </Text>

      <Center>
        <ButtonCommon
          tt="capitalize"
          bg={
            "radial-gradient(65% 65% at 50% 50%, rgba(255, 255, 255, 0.24) 0%, rgba(255, 255, 255, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */, rgba(255, 255, 255, 0.04)"
          }
          sx={{
            border: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          Learn more
        </ButtonCommon>
      </Center>
    </>
  );
};
