import { Box, Group, Text } from "@mantine/core";
import { nanoid } from "nanoid";
import React, { useMemo } from "react";
import { colors } from "~/constants";

import { type ITimeRangeOption, timeRangeOptions, useDisplayTokens, useTimeRange } from "../hooks";

const optionList = Object.values(timeRangeOptions);

export const Toolbar = () => {
  const displayTo = useDisplayTokens((state) => state.tokenTo);
  const selectedTimeRange = useTimeRange((state) => state.option);

  return (
    <Group position="apart" mb={{ base: 40 }} align="start">
      <Box>
        <Text tt="uppercase" fz={{ base: 28 }} fw={500}>
          {0} {displayTo?.symbol}
        </Text>

        <Text fz={{ base: 12 }} mt={2}>
          <span style={{ color: colors.PRIMARY_COLOR }}>38.3000 (2.14%)</span> {selectedTimeRange.desc}
        </Text>
      </Box>

      <Group spacing={5}>
        {optionList.map((item) => (
          <ButtonTimeRange key={nanoid()} option={item} />
        ))}
      </Group>
    </Group>
  );
};

type ButtonTimeRangeProps = {
  option: ITimeRangeOption;
};

const ButtonTimeRange: React.FC<ButtonTimeRangeProps> = ({ option }) => {
  const [selectedTimeRange, setSelectedTimeRange] = useTimeRange((state) => [state.option, state.setOption]);

  const isActive = useMemo(() => selectedTimeRange.label === option.label, [option.label, selectedTimeRange.label]);

  return (
    <Box
      lh="1em !important"
      sx={{
        cursor: "pointer",
        borderRadius: 5,
        transition: "all 0.1s ease-in-out",
        "&:hover": { backgroundColor: colors.PRIMARY_COLOR },
      }}
      className={isActive ? "active" : ""}
      onClick={() => !isActive && setSelectedTimeRange(option)}
      bg={isActive ? colors.PRIMARY_COLOR : "rgba(255,255,255,0.1)"}
      p={5}
      fz={{ base: 12 }}
      tt="uppercase"
      fw={500}
    >
      {option.label}
    </Box>
  );
};
