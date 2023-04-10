import { Accordion, Group, Text } from "@mantine/core";
import React from "react";
import { BiInfoCircle } from "react-icons/bi";

export const Information = () => {
  return (
    <Accordion variant="filled" radius="xs" defaultValue="0">
      <Accordion.Item
        value="0"
        sx={{
          "&[data-active]": {
            backgroundColor: "transparent",
          },
        }}
      >
        <Accordion.Control c="#fff" fz={{ base: 12 }} fw={500}>
          MORE INFORMATION
        </Accordion.Control>

        <Accordion.Panel>
          <DataSection label="Minimum Received" desc="" value={`${0} USDT`} />

          <DataSection label="Gas Fee" desc="" value={`$${0}`} />

          <DataSection label="Price Impact" desc="" value={`< 0%`} />
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
};

type DataSectionProps = {
  label: string;
  desc: string;
  value: string;
};

const DataSection: React.FC<DataSectionProps> = ({ desc, label, value }) => (
  <Group position="apart" mt={10}>
    <Group spacing={4}>
      <Text fz={{ base: 12 }}>{label}</Text>

      <BiInfoCircle size={14} />
    </Group>

    <Text fz={{ base: 12 }} fw="bold">
      {value}
    </Text>
  </Group>
);
