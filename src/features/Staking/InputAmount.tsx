import { Button, Flex, TextInput } from "@mantine/core";
import React, { type ForwardRefRenderFunction, forwardRef, memo, useImperativeHandle, useState } from "react";
import { useTokenContext } from "~/contexts/tokenContext";

const REGEX_POSITIVE_FLOAT = /^[+]?\d+(\.\d+)?$/;

type Ref = {
  stakeAmount: string;
  setStakeAmount: React.Dispatch<React.SetStateAction<string>>;
};

type Props = {
  setStakeAmountNumber: (amount: number) => void;
};

const _InputAmount: ForwardRefRenderFunction<Ref, Props> = ({ setStakeAmountNumber }, ref) => {
  const { balance } = useTokenContext();
  const [stakeAmount, setStakeAmount] = useState("");

  useImperativeHandle(ref, () => ({
    stakeAmount,
    setStakeAmount,
  }));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setStakeAmount(value);

    if (!REGEX_POSITIVE_FLOAT.test(value)) return 0;

    setStakeAmountNumber(parseFloat(value));
  };

  console.log("render input");

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

const __InputAmount = forwardRef<Ref, Props>(_InputAmount);

export const InputAmount = memo(__InputAmount);
