import { Box, Group } from "@mantine/core";
import React from "react";
import { ButtonCommon } from "~/components";
import { colors } from "~/constants";
import { useMetamask } from "~/contexts";
import { shortenWalletAddress } from "~/utils";

export const ActionButtons = () => {
  const { address, connect, setupDefaultNetwork } = useMetamask();

  return (
    <Group spacing={10}>
      <ButtonCommon
        variant="filled"
        bg={colors.PRIMARY_COLOR}
        onClick={() => void setupDefaultNetwork()}
        px={15}
        py={9}
        darkenHover
      >
        Add chain
      </ButtonCommon>

      {!address ? (
        <ButtonCommon variant="filled" bg={colors.PRIMARY_COLOR} onClick={connect} px={15} py={9} darkenHover>
          Connect Wallet
        </ButtonCommon>
      ) : (
        <Box
          bg="radial-gradient(70% 70% at 50% 50%, rgba(255, 255, 255, 0.24) 0%, rgba(255, 255, 255, 0) 100%)"
          px={15}
          py={11}
          sx={{ borderRadius: 20, border: "1px solid rgba(255, 255, 255, 0.1)" }}
          fz={14}
          fw={600}
        >
          {shortenWalletAddress(address)}
        </Box>
      )}
    </Group>
  );
};
