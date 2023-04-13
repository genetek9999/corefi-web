import { Box, Text, type TextProps, Title } from "@mantine/core";
import React from "react";

export const Information = () => {
  return (
    <Box>
      <Title order={2} fz={{ base: 20 }} fw={600} mb="md">
        Stake Information
      </Title>

      <Box
        p="lg"
        bg="linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.056) 100%)"
        sx={{ borderRadius: 16 }}
      >
        <Text {...textProps}>Claim your share of protocol revenue generated.</Text>

        <Text {...textProps}>
          A % fee is deducted from every swap and used to buy a stablecoin which is distributed to all COREFI stakers.
        </Text>

        <Text {...textProps}>Rewards are distributed every few days, and you can Harvest at any time.</Text>

        <Text {...textProps}>
          The APR (30D) metric shows an annualized return that is forecasted, based on the revenue collected over the
          previous thirty days.
        </Text>

        <Text {...textProps}>
          Deposit fee is deducted when you deposit your JOE tokens. The deposit fee may be modified at any time.
        </Text>
      </Box>
    </Box>
  );
};

const textProps: TextProps = {
  lh: "1.5em !important",
};
