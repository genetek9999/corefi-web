import { Box } from "@mantine/core";
import React from "react";

import { Chart, Toolbar, Topbar } from "./components";

export const MarketChart = () => {
  return (
    <Box>
      <Topbar />

      <Toolbar />

      <Chart />
    </Box>
  );
};
