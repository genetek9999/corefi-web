import { Box } from "@mantine/core";
import React, { useMemo } from "react";

import { useSelectedDisplay } from "../../hooks";

type Props = {
  children: React.ReactNode;
  value: "main" | "info";
};

export const BoxDisplay: React.FC<Props> = ({ children, value }) => {
  const currentDisplay = useSelectedDisplay((state) => state.value);

  const displayed = useMemo(() => currentDisplay === value, [currentDisplay, value]);

  return (
    <Box
      pos={displayed ? "relative" : "absolute"}
      opacity={displayed ? 1 : 0}
      top={0}
      sx={{ zIndex: 0, visibility: displayed ? "visible" : "hidden" }}
    >
      {children}
    </Box>
  );
};
