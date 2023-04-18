import { Box, Center, Flex, Text, Title } from "@mantine/core";
import moment from "moment";
import { nanoid } from "nanoid";
import React from "react";
import { api, formatPrice, shortenWalletAddress } from "~/utils";

export const Remittances = () => {
  const { data } = api.staking.getHistory.useQuery();

  return (
    <Box>
      <Title order={2} fz={{ base: 20 }} fw={600} mb="xl">
        History
      </Title>

      <Flex justify="space-between" mb={15} px="sm">
        <Box w="25%">
          <Text tt="uppercase" fz={{ base: 12 }} fw={600}>
            Address
          </Text>
        </Box>

        <Box w="25%">
          <Text tt="uppercase" fz={{ base: 12 }} fw={600}>
            Timestamp
          </Text>
        </Box>

        <Box w="25%">
          <Text tt="uppercase" fz={{ base: 12 }} fw={600}>
            Type
          </Text>
        </Box>

        <Box w="25%">
          <Text tt="uppercase" fz={{ base: 12 }} fw={600} ta="end">
            Amount
          </Text>
        </Box>
      </Flex>

      {data &&
        (!data.length ? (
          <Center tt="uppercase" fw="bold" h={150} bg="rgba(255, 255, 255, 0.08)" sx={{ borderRadius: 20 }}>
            No Data
          </Center>
        ) : (
          data.map((item) => <TableRow key={nanoid()} {...item} />)
        ))}
    </Box>
  );
};

type TableRowProps = {
  address: string;
  amount: number;
  createdAt: number;
  type: number;
};

const TableRow: React.FC<TableRowProps> = ({ address, amount, createdAt, type }) => (
  <Flex justify="space-between" mb={10} bg="rgba(255, 255, 255, 0.08)" sx={{ borderRadius: 8 }} p="sm">
    <Box w="25%">
      <Text tt="uppercase" fz={{ base: 14 }}>
        {shortenWalletAddress(address)}
      </Text>
    </Box>

    <Box w="25%">
      <Text tt="uppercase" fz={{ base: 14 }}>
        {moment.unix(createdAt).format("YYYY-MM-DD")}
      </Text>
    </Box>

    <Box w="25%">
      <Text tt="uppercase" fz={{ base: 14 }}>
        {type === 1 ? "Claim" : type === 2 ? "Unstake" : "Stake"}
      </Text>
    </Box>

    <Box w="25%">
      <Text tt="uppercase" fz={{ base: 14 }} ta="end">
        {formatPrice(amount, null)} COREFI
      </Text>
    </Box>
  </Flex>
);
