import { Button, Flex, TextInput } from "@mantine/core";
import React, { memo } from "react";
import { useTokenContext } from "~/contexts/tokenContext";

import { useStakeAmount } from "./hooks/useStakeAmount";
import { useStakeAmountNumber } from "./hooks/useStakeAmountNumber";

const REGEX_POSITIVE_FLOAT = /^[+]?\d+(\.\d+)?$/;

const _InputAmount = () => {
  const { balance } = useTokenContext();
  const [stakeAmount, setStakeAmount] = useStakeAmount((state) => [state.value, state.setValue]);
  const setStakeAmountNumber = useStakeAmountNumber((state) => state.setValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setStakeAmount(value);

    if (!REGEX_POSITIVE_FLOAT.test(value)) return 0;

    setStakeAmountNumber(parseFloat(value));
  };

  return (
    <Flex mt={13} gap="xs" align={"center"} justify={"space-between"}>
      <TextInput
        variant="unstyled"
        sx={{ flex: 1, "*": { color: "#fff" } }}
        placeholder="0.0"
        value={stakeAmount}
        onChange={handleChange}
      />

      <Button sx={{ borderRadius: "6px" }} onClick={() => setStakeAmount(balance.toString())}>
        MAX
      </Button>
    </Flex>
  );
};

export const InputAmount = memo(_InputAmount);
