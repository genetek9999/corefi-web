import { Group, Input, Text } from "@mantine/core";
import React, { useMemo } from "react";
import { useSelectedToken, useValue } from "~/features/Swap";
import { formatPrice } from "~/utils";

import { SelectToken } from "./SelectToken";

export const InputFrom = () => {
  const [value, setValue] = useValue((state) => [state.valueFrom, state.setValueFrom]);
  const [tokenFrom, setTokenFrom, tokenTo] = useSelectedToken((state) => [
    state.currencyFrom,
    state.setCurrencyFrom,
    state.currencyTo,
  ]);

  const tokenPrice = useMemo(() => tokenFrom?.current_price || 1, [tokenFrom?.current_price]);

  return (
    <Group spacing={8}>
      <Input
        variant="unstyled"
        placeholder="0.0"
        sx={{ "*": { fontSize: 24, fontWeight: 500 }, input: { color: "#fff" }, flex: 1 }}
        px={0}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <Text fz={{ base: 14 }} fw={500}>
        ~{formatPrice(tokenPrice)}
      </Text>

      <SelectToken token={tokenFrom} setToken={setTokenFrom} otherTokens={tokenTo ? [tokenTo] : []} />
    </Group>
  );
};
