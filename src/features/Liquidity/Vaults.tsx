import { Box, Center, Grid, Group, Text } from "@mantine/core";
import { nanoid } from "nanoid";
import React from "react";
import { colors } from "~/constants";
import { formatPrice } from "~/utils";

const vaultList: VaultItemProps[] = [
  {
    status: "Active",
    version: "1",
    pair: "WBTC/USDC",
    desc: "Manages your liquidity using a passive rebalancing strategy",
    tvl: 447733,
    used: "6.99",
  },
  {
    status: "Active",
    version: "1",
    pair: "ETH/USDC",
    desc: "Manages your liquidity using a passive rebalancing strategy",
    tvl: 247973,
    used: "8.99",
  },
  {
    status: "Active",
    version: "1",
    pair: "ETH/USDT",
    desc: "Manages your liquidity using a passive rebalancing strategy",
    tvl: 385863,
    used: "5.43",
  },
];

export const Vaults = () => {
  return (
    <Grid my={{ base: 30, sm: 60 }} gutter={20} gutterSm={40}>
      {vaultList.map((item) => (
        <Grid.Col key={nanoid()} span={12} sm={6} md={4}>
          <VaultItem {...item} />
        </Grid.Col>
      ))}

      <Grid.Col span={12} sm={6} md={4}>
        <Center
          mih={200}
          sx={{ border: "2px dashed #ffffff50", borderRadius: 16 }}
          ta="center"
          fz={{ sm: 18 }}
          fw={600}
          opacity={0.9}
        >
          More vaults <br /> coming soon!
        </Center>
      </Grid.Col>
    </Grid>
  );
};

type VaultItemProps = {
  status: string;
  version: string;
  pair: string;
  desc: string;
  tvl: number;
  used: string;
};

const VaultItem: React.FC<VaultItemProps> = ({ desc, pair, status, tvl, used, version }) => (
  <Box
    p={{ base: 15, sm: 30 }}
    sx={{ borderRadius: 16, boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)" }}
    bg="linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.0144) 100%)"
    mih={{ sm: 350 }}
    h="100%"
  >
    <Group spacing={8}>
      <Box bg="#fff" c={colors.PURPLE_1} fz={12} fw={600} sx={{ borderRadius: 20 }} px={12} py={7} lh="1em !important">
        {status}
      </Box>

      <Box bg="#fff" c={colors.PURPLE_1} fz={12} fw={600} sx={{ borderRadius: 20 }} px={12} py={7} lh="1em !important">
        V{version}
      </Box>
    </Group>

    <Text mt={20} fz={{ base: 20, sm: 24 }} fw={600}>
      {pair}
    </Text>

    <Text mt={25} fz={14}>
      {desc}
    </Text>

    <Grid mt={30}>
      <Grid.Col span={6}>
        <Box
          px={20}
          py={15}
          bg="linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.019) 100%)"
          sx={{ borderRadius: 12 }}
        >
          <Text fz={12} fw={600} mb={5}>
            TVL
          </Text>

          <Text fw={600}>{formatPrice(tvl)}</Text>
        </Box>
      </Grid.Col>

      <Grid.Col span={6}>
        <Box
          px={20}
          py={15}
          bg="linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.019) 100%)"
          sx={{ borderRadius: 12 }}
        >
          <Text fz={12} fw={600} mb={5}>
            Capacity used
          </Text>

          <Text fw={600}>{used}%</Text>
        </Box>
      </Grid.Col>
    </Grid>
  </Box>
);
