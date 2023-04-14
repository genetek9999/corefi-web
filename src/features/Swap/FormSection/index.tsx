import { Box, Text } from "@mantine/core";
import React from "react";

import { Info } from "./Info";
import { Main } from "./Main";
import { Topbar } from "./Topbar";

export const FormSection = () => {
  return (
    <Box>
      <Topbar />

      <Text fz={{ base: 12 }} mb={12}>
        Buy or sell any token instantly at the best price
      </Text>

      <Box bg="rgba(255, 255, 255, 0.1)" sx={{ borderRadius: 20 }} px={16} py={20}>
        <Main />

        <Info />
      </Box>
    </Box>
  );
};
