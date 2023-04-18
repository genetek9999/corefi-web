import { Accordion, Divider, Group, Text } from "@mantine/core";
import React, { useMemo } from "react";
import { BiInfoCircle } from "react-icons/bi";
import { useSelectedToken, useSlippage, useValue } from "~/features/Swap/hooks";

const GAS_FEE = 0.001;
const PRICE_IMPACT = 0.06;

export const Information = () => {
  const valueFrom = useValue((state) => state.valueFrom);
  const [tokenFrom, tokenTo] = useSelectedToken((state) => [state.currencyFrom, state.currencyTo]);
  const slippage = useSlippage((state) => state.value);

  const minimumReceived = useMemo(() => {
    if (valueFrom && tokenFrom && tokenTo && slippage) {
      const valueTo = parseFloat(valueFrom) * (tokenFrom.current_price / tokenTo.current_price);

      const result = valueTo * (1 - parseFloat(slippage.toString()) / 100);

      return Math.floor(result);
    }

    return 0;
  }, [slippage, tokenFrom, tokenTo, valueFrom]);

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

        <Accordion.Panel
          sx={{
            ".mantine-Accordion-content": {
              paddingTop: 0,
            },
          }}
        >
          {tokenFrom && tokenTo && (
            <>
              <Divider pb="xs" color="#fff" opacity={0.2} />

              <DataSection
                label="Minimum Received"
                desc=""
                value={`${minimumReceived} ${tokenTo.symbol.toUpperCase()}`}
              />

              <DataSection label="Gas Fee" desc="" value={`$${GAS_FEE}`} />

              <DataSection label="Price Impact" desc="" value={`< ${PRICE_IMPACT}%`} />
            </>
          )}
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
