import { Box } from "@mantine/core";
import React from "react";

import { Balance } from "./Balance";
import { ClaimSection } from "./ClaimSection";
import { InputAmount } from "./InputAmount";
import { OptionSegmented } from "./OptionSegmented";

export const Main = () => {
  return (
    <Box>
      <OptionSegmented />

      <Balance />

      <InputAmount />

      <ClaimSection />
    </Box>
  );
};
