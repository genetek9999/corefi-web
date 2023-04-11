import { Box } from "@mantine/core";
import React from "react";
import { IconSettings } from "~/assets/vectors";

import { useSelectedDisplay } from "../../hooks";

export const ButtonSettings = () => {
  const setDisplay = useSelectedDisplay((state) => state.setValue);

  return (
    <Box lh="1em !important" onClick={() => setDisplay("settings")} sx={{ cursor: "pointer" }}>
      <IconSettings />
    </Box>
  );
};
