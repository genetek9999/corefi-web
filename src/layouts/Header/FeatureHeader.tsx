import { Box, Group, Text } from "@mantine/core";
import { nanoid } from "nanoid";
import React from "react";
import { HybridLink, Section } from "~/components";
import { menuFeatuerHeader } from "~/constants";

export const FeatureHeader = () => {
  return (
    <Section fluid py={25} bg="rgba(255, 255, 255, 0.03);">
      <Box>
        <Group>
          {menuFeatuerHeader.map((item) => (
            <MenuItem key={nanoid()} {...item} />
          ))}
        </Group>
      </Box>
    </Section>
  );
};

type MenuItemProps = {
  label: string;
  link: string;
};

const MenuItem: React.FC<MenuItemProps> = ({ label, link }) => (
  <HybridLink href={link}>
    <Text>{label}</Text>
  </HybridLink>
);
