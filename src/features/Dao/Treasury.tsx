import { Box, Divider, Group, Text, Title } from "@mantine/core";
import React from "react";
import { formatPrice, shortenWalletAddress } from "~/utils";

import { DaoMenu, useSelectMenu } from "./hooks";

export const Treasury = () => {
  const selectedMenu = useSelectMenu((state) => state.value);

  if (selectedMenu !== DaoMenu.TREASURY) return <></>;

  return (
    <>
      <Title order={2} fz={{ base: 20, sm: 24 }} fw={600} mb="xl">
        Treasury
      </Title>

      <Box
        bg="linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.0224) 100%)"
        sx={{ borderRadius: 12 }}
      >
        <Group position="apart" px="lg" py="md">
          <Title order={3} fw={600} fz={18}>
            Wallet
          </Title>

          <Text fz={14} fw={600}>
            24h change
          </Text>
        </Group>

        <Divider color="rgba(255,255,255,0.1)" />

        <Group position="apart" px="lg" py="md">
          <Group>
            <Text fz={18} fw={600}>
              {shortenWalletAddress("0xffop12o313j2p13j133l1jk")}
            </Text>
          </Group>

          <Text fz={18} fw={600}>
            {formatPrice(1000000)}
          </Text>
        </Group>
      </Box>
    </>
  );
};
