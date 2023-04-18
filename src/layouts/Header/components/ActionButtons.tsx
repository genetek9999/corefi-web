import { Box, Group, type GroupProps } from "@mantine/core";
import React from "react";
import { ButtonCommon } from "~/components";
import { colors } from "~/constants";
import { useMetamask } from "~/contexts";
import { shortenWalletAddress } from "~/utils";

export const ActionButtons: React.FC<GroupProps> = ({ ...props }) => {
  const { address, connect, setupDefaultNetwork } = useMetamask();

  return (
    <Group spacing={10} {...props}>
      {/* <ButtonCommon
        variant="filled"
     
        onClick={() => void setupDefaultNetwork()}
        px={15}
        py={9}
        sx={{
          border: "1px solid rgba(255, 255, 255, 0.1)",
        }}
        darkenHover
      >
        Add chain
      </ButtonCommon> */}

      {!address ? (
        <ButtonCommon
          variant="filled"
          bg={
            "radial-gradient(65% 65% at 50% 50%, rgba(255, 255, 255, 0.24) 0%, rgba(255, 255, 255, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */, rgba(255, 255, 255, 0.04)"
          }
          onClick={connect}
          px={15}
          sx={{
            border: "1px solid rgba(255, 255, 255, 0.1)",
          }}
          py={9}
          darkenHover
        >
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
