import { Box, Grid, Text, Title } from "@mantine/core";
import React from "react";
import { formatPrice } from "~/utils";

export const Overview = () => {
  return (
    <Box>
      <Title order={2} fz={{ base: 20 }} fw={600} mb="md">
        Overview
      </Title>

      <Grid>
        <Grid.Col span={12} sm={4}>
          <Card title="Total Staked" />
        </Grid.Col>

        <Grid.Col span={12} sm={4}>
          <Card title="APR (30D)" suffix="%" />
        </Grid.Col>

        <Grid.Col span={12} sm={4}>
          <Card title="Deposit Fee" suffix="%" />
        </Grid.Col>
      </Grid>
    </Box>
  );
};

type CardProps = {
  title: string;
  value?: string | number;
  suffix?: string;
};

const Card: React.FC<CardProps> = ({ title, value = 0, suffix }) => (
  <Box
    p="lg"
    bg="linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.056) 100%)"
    sx={{ borderRadius: 12 }}
  >
    <Text fz={{ base: 14 }} mb="xs">
      {title}
    </Text>

    <Text fz={{ sm: 20 }} fw={500}>
      {formatPrice(value, null)}
      {suffix}
    </Text>
  </Box>
);
