import { Input } from "@mantine/core";
import React, { useMemo } from "react";
import { ButtonCommon } from "~/components";
import { useMetamask } from "~/contexts";
import { env } from "~/env.mjs";

import { useSelectOption } from "./hooks";

export const InputAmount = () => {
  const option = useSelectOption((state) => state.value);
  const { address, connect, isCorrectChain, setupDefaultNetwork } = useMetamask();

  const buttonText = useMemo(() => {
    if (!address) {
      return "Connect wallet";
    } else if (!isCorrectChain) {
      return `Switch to ${env.NEXT_PUBLIC_NETWORK_NAME || ""}`;
    } else {
      return option;
    }
  }, [address, isCorrectChain, option]);

  const handleClickSubmit = () => {
    if (!address) {
      connect();
    } else if (!isCorrectChain) {
      void setupDefaultNetwork();
    } else {
    }
  };

  return (
    <>
      <Input
        variant="unstyled"
        placeholder="Enter Amount"
        bg="linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0) 100%)"
        py={5}
        px={20}
        sx={{ borderRadius: 16, border: "1px solid #E2E8F033", "&,*": { fontSize: 14 }, input: { color: "#fff" } }}
        mb={20}
      />

      <ButtonCommon
        fullWidth
        bg="radial-gradient(80% 80% at 50% 50%, rgba(255, 255, 255, 0.24) 0%, rgba(255, 255, 255, 0) 100%)"
        sx={{
          border: "1px solid rgba(255, 255, 255, 0.1)",
        }}
        py={15}
        tt="capitalize"
        onClick={() => void handleClickSubmit()}
      >
        {buttonText}
      </ButtonCommon>
    </>
  );
};
