import { Divider, Group, Text } from "@mantine/core";
import React from "react";
import { type PropsCurrency } from "~/helpers/coingecko";
import { formatPrice } from "~/utils";

export const TokenDetail = ({ token }: { token?: PropsCurrency }) => {
  return (
    <>
      <RowData label="Price" value={formatPrice(token?.current_price)} />

      <CustomDivider />

      <RowData label="Trading Volume (24H)" value={formatPrice(token?.total_volume)} />

      <CustomDivider />

      <RowData label="Market Cap Rank" value={`#${token?.market_cap_rank || "?"}`} />

      <CustomDivider />

      <RowData label="Market Cap" value={formatPrice(token?.market_cap)} />

      <CustomDivider />

      <RowData label="All-Time High" value={formatPrice(token?.ath)} />

      <CustomDivider />

      <RowData label="All-Time Low" value={formatPrice(token?.atl)} />

      <CustomDivider />

      <RowData label="Circulating Supply" value={formatPrice(token?.circulating_supply)} />

      <CustomDivider />

      <RowData label="Total Supply" value={formatPrice(token?.total_supply)} />

      {/* <CustomDivider />

      <RowData label="Contract Address" value="" /> */}
    </>
  );
};

const RowData = ({ label, value }: { label: string; value: React.ReactNode | string }) => (
  <Group position="apart">
    <Text fz={12} fw={500}>
      {label}
    </Text>

    {typeof value === "string" ? (
      <Text fz={12} fw={500}>
        {value}
      </Text>
    ) : (
      value
    )}
  </Group>
);

const CustomDivider = () => <Divider mt={15} pb={15} color="#fff" opacity={0.1} />;
