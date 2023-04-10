import { Box, Group, Input } from "@mantine/core";
import React from "react";
import { FiSearch } from "react-icons/fi";
import { colors } from "~/constants";

export const Searchbar = () => {
  return (
    <Group bg="rgba(255,255,255,0.1)" px={12} py={5} spacing={10} sx={{ borderRadius: 30 }} mb={16}>
      <FiSearch size={18} />

      <Box sx={{ flex: 1 }}>
        <Input
          variant="unstyled"
          placeholder='Try typing "10 BNB to COREFI"'
          sx={{ "*": { fontSize: 16 }, input: { color: "#fff" } }}
          px={0}
        />
      </Box>

      <Box bg="#fff" py={3} px={8} c={colors.PURPLE_1} fz={{ base: 12 }} sx={{ borderRadius: 10 }}>
        Ctrl + K
      </Box>
    </Group>
  );
};
