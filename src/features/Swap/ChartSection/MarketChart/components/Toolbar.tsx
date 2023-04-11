import { Box, Group, Text } from "@mantine/core";
import React from "react";
import { colors } from "~/constants";

import { useDisplayTokens } from "../hooks";

const options = {
  ONE_HOUR: {
    label: "1h",
    desc: "Past hour",
    value: "",
  },
  FOUR_HOUR: {
    label: "4h",
    desc: "Past 4 hours",
    value: "",
  },
  ONE_DAY: {
    label: "1d",
    desc: "Past 24 hours",
    value: "",
  },
  ONE_WEEK: {
    label: "1d",
    desc: "Past 24 hours",
    value: "",
  },
};

export const Toolbar = () => {
  const [displayFrom, displayTo] = useDisplayTokens((state) => [state.tokenFrom, state.tokenTo]);

  return (
    <Group position="apart" mb={{ base: 30 }} align="start">
      <Box>
        <Text tt="uppercase" fz={{ base: 28 }} fw={500}>
          {0} {displayTo?.symbol}
        </Text>

        <Text fz={{ base: 12 }} mt={2}>
          <span style={{ color: colors.PRIMARY_COLOR }}>38.3000 (2.14%)</span> Past 24 hours
        </Text>
      </Box>
    </Group>
  );
};
