import { Box } from "@mantine/core";
import React from "react";
import { MdOutlineSwapVert } from "react-icons/md";
import { useSelectedToken } from "~/features/Swap/hooks";

export const ButtonSwitch = () => {
  const switchToken = useSelectedToken((state) => state.switchCurrency);

  return (
    <Box
      p={10}
      bg="rgba(255, 255, 255, 0.2)"
      lh="0em !important"
      sx={{
        borderRadius: "100%",
        cursor: "pointer",
        transition: "all 0.2s ease-in-out",
        "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.3)" },
      }}
      onClick={switchToken}
    >
      <MdOutlineSwapVert size={20} />
    </Box>
  );
};
