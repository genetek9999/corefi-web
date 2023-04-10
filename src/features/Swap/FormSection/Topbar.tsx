import { Group, Text } from "@mantine/core";
import React from "react";
import { colors } from "~/constants";

import { ButtonInfo, ButtonSettings, ButtonShare, ButtonTutorial } from "./components";

export const Topbar = () => {
  return (
    <Group position="apart" mb={25}>
      <Text c={colors.PRIMARY_COLOR} fz={{ base: 20 }} fw={500}>
        Swap
      </Text>

      <Group>
        <ButtonTutorial />

        <ButtonInfo />

        <ButtonShare />

        <ButtonSettings />
      </Group>
    </Group>
  );
};
