import { Text } from "@mantine/core";
import React from "react";
import { useTokenContext } from "~/contexts/tokenContext";
import { formatPrice } from "~/utils";

export const TextBalance = () => {
  const { balance } = useTokenContext();

  return (
    <Text fz={12} c={"white"}>
      Balance: <b>{formatPrice(balance, null)}</b>
    </Text>
  );
};
