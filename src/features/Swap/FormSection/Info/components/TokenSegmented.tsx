import { Avatar, Group, type GroupProps, SegmentedControl, Text, type TextProps } from "@mantine/core";
import React, { useMemo } from "react";
import { useSelectedToken } from "~/features/Swap/hooks";
import { type PropsCurrency } from "~/helpers/coingecko";

type Props = {
  onSelect: (token: PropsCurrency) => void;
};

export const TokenSegmented: React.FC<Props> = ({ onSelect }) => {
  const [tokenFrom, tokenTo] = useSelectedToken((state) => [state.currencyFrom, state.currencyTo]);

  const handleChange = (tokenId: string) => {
    if (tokenFrom && tokenId === tokenFrom.id) {
      onSelect(tokenFrom);
    } else if (tokenTo && tokenId === tokenTo.id) {
      onSelect(tokenTo);
    }
  };

  const tokens = useMemo(
    () => [
      {
        label: (
          <Group {...groupProps}>
            <Avatar src={tokenFrom?.image} size="xs">
              {tokenFrom?.symbol}
            </Avatar>

            <Text {...labelProps}>{tokenFrom?.symbol.toUpperCase()}</Text>
          </Group>
        ),
        value: tokenFrom?.id || "",
      },
      {
        label: (
          <Group {...groupProps}>
            <Avatar src={tokenTo?.image} size="xs">
              {tokenTo?.symbol}
            </Avatar>

            <Text {...labelProps}>{tokenTo?.symbol.toUpperCase()}</Text>
          </Group>
        ),
        value: tokenTo?.id || "",
      },
    ],
    [tokenFrom?.id, tokenFrom?.image, tokenFrom?.symbol, tokenTo?.id, tokenTo?.image, tokenTo?.symbol],
  );

  return (
    <SegmentedControl
      onChange={handleChange}
      data={tokens}
      fullWidth
      bg="rgba(255, 255, 255, 0.1)"
      sx={{
        "&, .mantine-SegmentedControl-active": { borderRadius: 20 },
        ".mantine-SegmentedControl-active": { backgroundColor: "#fff" },
        ".mantine-SegmentedControl-labelActive": { "&, *": { color: "#000" } },
      }}
    />
  );
};

const groupProps: GroupProps = {
  noWrap: true,
  sx: { justifyContent: "center" },
  spacing: 5,
};

const labelProps: TextProps = { fz: 12, fw: 500, lh: "1em !important" };
