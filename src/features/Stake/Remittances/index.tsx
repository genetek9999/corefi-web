import { Box, Center, Flex, Text, Title } from "@mantine/core";
import { nanoid } from "nanoid";
import React, { useState } from "react";
import { formatPrice } from "~/utils";

export const Remittances = () => {
  const [dataSource, setDataSource] = useState<TableRowProps[]>([]);

  return (
    <Box>
      <Title order={2} fz={{ base: 20 }} fw={600} mb="xl">
        Remittances
      </Title>

      <Flex justify="space-between" mb={15}>
        <Box w="33%">
          <Text tt="uppercase" fz={{ base: 12 }} fw={600}>
            Timestamp
          </Text>
        </Box>

        <Box w="33%">
          <Text tt="uppercase" fz={{ base: 12 }} fw={600}>
            Fees Collected
          </Text>
        </Box>

        <Box w="33%">
          <Text tt="uppercase" fz={{ base: 12 }} fw={600} ta="end">
            USD Remitted
          </Text>
        </Box>
      </Flex>

      {!dataSource.length ? (
        <Center tt="uppercase" fw="bold" h={150} bg="rgba(255, 255, 255, 0.08)" sx={{ borderRadius: 20 }}>
          No Data
        </Center>
      ) : (
        dataSource.map((item) => <TableRow key={nanoid()} {...item} />)
      )}
    </Box>
  );
};

type TableRowProps = {
  timestamp: string;
  feesCollected: string;
  usdRemitted: number | string;
};

const TableRow: React.FC<TableRowProps> = ({ feesCollected, timestamp, usdRemitted }) => (
  <Flex justify="space-between" mb={10} bg="rgba(255, 255, 255, 0.08)" sx={{ borderRadius: 8 }}>
    <Box w="33%">
      <Text tt="uppercase" fz={{ base: 14 }}>
        {timestamp}
      </Text>
    </Box>

    <Box w="33%">
      <Text tt="uppercase" fz={{ base: 14 }}>
        {feesCollected}
      </Text>
    </Box>

    <Box w="33%">
      <Text tt="uppercase" fz={{ base: 14 }} ta="end">
        {formatPrice(usdRemitted)}
      </Text>
    </Box>
  </Flex>
);
