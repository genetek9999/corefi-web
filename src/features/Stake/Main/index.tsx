import { Box, Group, Title } from "@mantine/core";
import React from "react";

import { Balance } from "./Balance";
import { ClaimSection } from "./ClaimSection";
import { InputAmount } from "./InputAmount";

export const Main = () => {
  return (
    <Box>
      <Group mb="sm" position="apart" align="end">
        <Title order={2} fz={{ base: 20 }} fw={600}>
          Stake
        </Title>

        <Balance />
      </Group>

      <InputAmount />

      <ClaimSection />
    </Box>
  );
};

//   8,979.999,999,995,129 - 8,899.999,999,995,129
