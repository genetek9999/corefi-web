import { Box, Grid, Group, Text } from "@mantine/core";
import React, { useMemo } from "react";
import { ButtonCommon } from "~/components";
import { useMetamask } from "~/contexts";
import { env } from "~/env.mjs";

export const ClaimSection = () => {
  const { address, connect, isCorrectChain, setupDefaultNetwork } = useMetamask();

  const buttonText = useMemo(() => {
    if (!address) {
      return "Connect wallet";
    } else if (!isCorrectChain) {
      return `Switch to ${env.NEXT_PUBLIC_NETWORK_NAME || ""}`;
    } else {
      return "Claim";
    }
  }, [address, isCorrectChain]);

  const handleClickSubmit = () => {
    if (!address) {
      connect();
    } else if (!isCorrectChain) {
      void setupDefaultNetwork();
    } else {
    }
  };

  return (
    <Box
      mt="xl"
      sx={{
        borderRadius: 12,
        border: "1px solid #ffffff25",
      }}
      bg="linear-gradient(180deg, rgba(236, 236, 254, 0.1) 0%, rgba(236, 236, 254, 0) 100%)"
      p={25}
    >
      <Grid>
        <Grid.Col span={6}>
          <Text mb="xs" fw={600}>
            Staked Balance
          </Text>

          <Group>
            <Text fz={{ base: 18 }} fw={600}>
              {0} COREFI
            </Text>
          </Group>
        </Grid.Col>

        <Grid.Col span={6}>
          <Text mb="xs" fw={600}>
            Pending Rewards
          </Text>

          <Group>
            <Text fz={{ base: 18 }} fw={600}>
              {0} COREFI
            </Text>
          </Group>
        </Grid.Col>
      </Grid>

      <ButtonCommon
        mt={25}
        fullWidth
        bg="radial-gradient(80% 80% at 50% 50%, rgba(255, 255, 255, 0.24) 0%, rgba(255, 255, 255, 0) 100%)"
        sx={{
          border: "1px solid rgba(255, 255, 255, 0.1)",
          borderRadius: 16,
        }}
        py={15}
        tt="capitalize"
        onClick={() => void handleClickSubmit()}
      >
        {buttonText}
      </ButtonCommon>
    </Box>
  );
};
