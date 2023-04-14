import { Box } from "@mantine/core";
import React from "react";

import { Chart, Topbar } from "./components";

export const MarketChart = () => {
  return (
    <Box>
      <Topbar />

      <Chart />
    </Box>
  );
};
