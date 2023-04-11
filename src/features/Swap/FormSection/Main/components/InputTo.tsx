import { Group, Input, Text } from "@mantine/core";
import React, { useMemo } from "react";
import { useSelectedToken, useValue } from "~/features/Swap";
import { formatPrice } from "~/utils";

import { SelectToken } from "./SelectToken";

export const InputTo = () => {
  const [valueFrom] = useValue((state) => [state.valueFrom]);
  const [tokenTo, setTokenTo, tokenFrom] = useSelectedToken((state) => [
    state.currencyTo,
    state.setCurrencyTo,
    state.currencyFrom,
  ]);

  const tokenPriceFrom = useMemo(() => tokenFrom?.current_price || 1, [tokenFrom?.current_price]);
  const tokenPriceTo = useMemo(() => tokenTo?.current_price || 0, [tokenTo?.current_price]);

  const valueTo = useMemo(() => {
    if (valueFrom) {
      return (parseFloat(valueFrom) * (tokenPriceFrom / tokenPriceTo)).toFixed(2).toString();
    }

    return "";
  }, [tokenPriceFrom, tokenPriceTo, valueFrom]);

  return (
    <Group spacing={8}>
      <Input
        placeholder="0.0"
        variant="unstyled"
        sx={{
          "*": { fontSize: 24, fontWeight: 500 },
          input: { color: "#fff" },
          flex: 1,
        }}
        px={0}
        readOnly
        value={valueTo}
      />

      <Text fz={{ base: 14 }} fw={500}>
        ~{formatPrice(tokenPriceTo)}
      </Text>

      <SelectToken token={tokenTo} setToken={setTokenTo} otherTokens={tokenFrom ? [tokenFrom] : []} />
    </Group>
  );
};
