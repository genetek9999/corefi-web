import { Box, Center, Text } from "@mantine/core";
import { nanoid } from "nanoid";
import React from "react";
import { LogoBrand } from "~/components";
import { SocialButtons } from "~/layouts/Footer/components";

import { DaoMenu, useSelectMenu } from "./hooks";

const menu = Object.values(DaoMenu);

export const Sidebar = () => {
  return (
    <Box
      bg="linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.0224) 100%)"
      sx={{ borderRadius: 12 }}
      w={250}
    >
      <Center my={20}>
        <LogoBrand w={60} />
      </Center>

      {menu.map((item) => (
        <MenuItem key={nanoid()} label={item} />
      ))}

      <Center py={20} px={20}>
        <SocialButtons />
      </Center>
    </Box>
  );
};

type MenuItemProps = {
  label: DaoMenu;
};

const MenuItem: React.FC<MenuItemProps> = ({ label }) => {
  const [value, setValue] = useSelectMenu((state) => [state.value, state.setValue]);

  return (
    <Box
      mt={10}
      py={5}
      px={20}
      sx={{ cursor: "pointer", borderLeft: `3px solid ${value === label ? "#fff" : "transparent"}` }}
      onClick={() => setValue(label)}
    >
      <Text fw={500} tt="capitalize">
        {label}
      </Text>
    </Box>
  );
};
