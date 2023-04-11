import { Box, Group, Text } from "@mantine/core";
import React from "react";
import { HiArrowLeft } from "react-icons/hi";

import { useSelectedDisplay } from "../../hooks";

type Props = {
  title: string;
  children?: React.ReactNode;
};

export const SubTopbar: React.FC<Props> = ({ title, children }) => {
  const setDisplay = useSelectedDisplay((state) => state.setValue);

  return (
    <Group position="apart">
      <Group spacing={10}>
        <HiArrowLeft size={18} onClick={() => setDisplay("main")} style={{ cursor: "pointer" }} />

        <Text fw={500} fz={{ base: 18 }}>
          {title}
        </Text>
      </Group>

      <Box sx={{ flex: 1 }} bg="transparent">
        {children}
      </Box>
    </Group>
  );
};
