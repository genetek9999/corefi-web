import { Text } from "@mantine/core";
import React from "react";
import { useTokenContext } from "~/contexts/tokenContext";

import { formatPrice } from "../../../utils/formatter";

export const Balance = () => {
  const { balance } = useTokenContext();

  return (
    <Text fz={{ base: 12 }} ta="end" fw={600}>
      <span style={{ opacity: 0.5, fontWeight: 400 }}>Balance:</span> {formatPrice(balance, null)}
    </Text>
  );
};
