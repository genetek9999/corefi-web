import { Button, Paper, Text } from "@mantine/core";
import React from "react";
import { useMetamask } from "~/contexts";

export const MetamaskSection = () => {
  const { chain, address, connect } = useMetamask();

  return address ? (
    <>
      <Paper px="lg" py="xs" radius="xl" mb="md">
        <Text fz="xl">
          Chain:{" "}
          <b>
            {chain?.name} ({chain?.chainId})
          </b>
        </Text>
      </Paper>

      <Paper px="lg" py="xs" radius="xl">
        <Text fz="xl">
          Wallet Address: <b>{address}</b>
        </Text>
      </Paper>
    </>
  ) : (
    <Button onClick={connect}>Connect metamask</Button>
  );
};
