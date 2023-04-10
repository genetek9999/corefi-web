import { Group, Text } from "@mantine/core";
import React from "react";
import { IoMdWallet } from "react-icons/io";

type Props = {
  onClick?: (value: string | number) => void;
};

export const Balance: React.FC<Props> = ({ onClick }) => {
  const handleClick = () => {
    onClick && onClick(0);
  };

  return (
    <Group spacing={4} sx={{ cursor: "pointer" }} onClick={handleClick}>
      <IoMdWallet />

      <Text fz={12} lh="0em !important" fw={500}>
        {0}
      </Text>
    </Group>
  );
};
