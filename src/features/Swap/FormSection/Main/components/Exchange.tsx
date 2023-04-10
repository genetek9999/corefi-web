import { Box, Group, Text } from "@mantine/core";
import React, { useEffect, useMemo, useState } from "react";
import { TbReload } from "react-icons/tb";
import { IconSwap } from "~/assets/vectors";
import { useSelectedToken } from "~/features/Swap/hooks";
import { type PropsCurrency } from "~/helpers/coingecko";

export const Exchange = () => {
  const [tokenFrom, tokenTo] = useSelectedToken((state) => [state.currencyFrom, state.currencyTo]);
  const [displayTokens, setDisplayTokens] = useState<(PropsCurrency | undefined)[]>([]);

  useEffect(() => {
    if (tokenFrom && tokenTo) {
      setDisplayTokens([tokenFrom, tokenTo]);
    }
  }, [tokenFrom, tokenTo]);

  const priceFrom = useMemo(() => displayTokens[0]?.current_price, [displayTokens]);
  const priceTo = useMemo(() => displayTokens[1]?.current_price, [displayTokens]);

  const exchangeRatio = useMemo(() => {
    if (priceFrom && priceTo) {
      return priceFrom / priceTo;
    }

    return 0;
  }, [priceFrom, priceTo]);

  const handleSwap = () => {
    if (displayTokens[0] && displayTokens[1]) {
      setDisplayTokens([displayTokens[1], displayTokens[0]]);
    }
  };

  if (!exchangeRatio) return <></>;

  return (
    <Group spacing={5}>
      <TbReload size={20} />

      <Text fz={{ base: 12 }} fw={500} lh="1em !important">
        1 {displayTokens[0]?.symbol.toUpperCase()} = {exchangeRatio} {displayTokens[1]?.symbol.toUpperCase()}
      </Text>

      <Box sx={{ lh: "1em !important", cursor: "pointer" }} onClick={handleSwap}>
        <IconSwap />
      </Box>
    </Group>
  );
};
