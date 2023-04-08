import { Text } from "@mantine/core";
import React from "react";
import { useTokenContext } from "~/contexts/tokenContext";

export const TextBalance = () => {
  const { balance } = useTokenContext();

  return (
    <Text fz={14} c={"white"}>
      Balance: {balance}
    </Text>
  );
};
