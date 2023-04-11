import { Avatar, Box, Group, Text } from "@mantine/core";
import React, { useEffect } from "react";
import { IconSwap2 } from "~/assets/vectors";
import { useSelectedToken } from "~/features/Swap";

import { useDisplayTokens } from "../hooks";

export const Topbar = () => {
  const [tokenFrom, tokenTo] = useSelectedToken((state) => [state.currencyFrom, state.currencyTo]);
  const [displayFrom, displayTo, setDisplayFrom, setDisplayTo, switchDisplay] = useDisplayTokens((state) => [
    state.tokenFrom,
    state.tokenTo,
    state.setTokenFrom,
    state.setTokenTo,
    state.switchToken,
  ]);

  useEffect(() => {
    if (tokenFrom && tokenTo) {
      setDisplayFrom(tokenFrom);
      setDisplayTo(tokenTo);
    }
  }, [setDisplayFrom, setDisplayTo, tokenFrom, tokenTo]);

  return (
    <Group mb={{ base: 30 }} spacing={10}>
      <Group spacing={0}>
        <Avatar src={displayFrom?.image} size="sm">
          {displayFrom?.name}
        </Avatar>

        <Avatar src={displayTo?.image} size="sm">
          {displayTo?.name}
        </Avatar>
      </Group>

      <Group spacing={4}>
        <Text tt="uppercase" fz={{ base: 24 }} fw={500}>
          {displayFrom?.symbol}
        </Text>

        <Text tt="uppercase" fz={{ base: 18 }}>
          / {displayTo?.symbol}
        </Text>
      </Group>

      <Box lh="1em !important" onClick={switchDisplay} sx={{ cursor: "pointer" }}>
        <IconSwap2 />
      </Box>
    </Group>
  );
};
