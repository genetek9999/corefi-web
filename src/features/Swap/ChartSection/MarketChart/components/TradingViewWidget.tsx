import dynamic from "next/dynamic";
import React from "react";
import { type AdvancedRealTimeChartProps } from "react-ts-tradingview-widgets";

const AdvancedRealTimeChart = dynamic(
  () => import("react-ts-tradingview-widgets").then((w) => w.AdvancedRealTimeChart),
  {
    ssr: false,
  },
);

export const TradingViewWidget: React.FC<AdvancedRealTimeChartProps> = ({ ...props }) => {
  return (
    <AdvancedRealTimeChart
      height={450}
      theme="dark"
      allow_symbol_change={false}
      style="3"
      hide_side_toolbar
      withdateranges={false}
      interval="60"
      disabled_features={["create_volume_indicator_by_default", "header_indicators", "header_compare"]}
      copyrightStyles={{ parent: { display: "none" }, span: { display: "none" } }}
      {...props}
    />
  );
};
