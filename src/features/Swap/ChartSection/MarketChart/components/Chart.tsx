import { Box, LoadingOverlay } from "@mantine/core";
import moment from "moment";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";
import { colors } from "~/constants";
import { getMarketChartRange } from "~/helpers/coingecko";

import { useDisplayTokens, useTimeRange } from "../hooks";
import { TradingViewWidget } from "./TradingViewWidget";

interface priceData {
  time: string;
  value: number;
}

export const Chart = () => {
  const effectRan = useRef(false);
  const [tokenFrom, tokenTo] = useDisplayTokens((state) => [state.tokenFrom, state.tokenTo]);
  const timeRange = useTimeRange((state) => state.option);
  const [dataSource, setDataSource] = useState<priceData[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  return <TradingViewWidget />;

  // const getData = useCallback(async () => {
  //   if (tokenFrom && tokenTo) {
  //     try {
  //       setIsLoading(true);

  //       const { amount, unit } = timeRange.value;
  //       const idFrom = tokenFrom.id;
  //       const idTo = tokenTo.id;

  //       const nowMoment = moment();
  //       const pastMoment = nowMoment.clone().subtract(amount, unit);

  //       const resultTokenFrom = await getMarketChartRange(idFrom, pastMoment.unix(), nowMoment.unix());
  //       const resultTokenTo = await getMarketChartRange(idTo, pastMoment.unix(), nowMoment.unix());

  //       const result: priceData[] = [];

  //       console.log(resultTokenFrom.length, resultTokenTo.length);

  //       resultTokenFrom.forEach((tokenFrom, index) => {
  //         const tokenTo = resultTokenTo[index];

  //         console.log(tokenFrom[0], tokenTo && tokenTo[0]);

  //         if (tokenTo && tokenTo[0] && tokenFrom[0] && tokenTo[1] && tokenFrom[1]) {
  //           result.push({
  //             time: moment.unix(tokenFrom[0]).format("DD MMM"),
  //             value: tokenFrom[1] / tokenTo[1],
  //           });
  //         }
  //       });

  //       setDataSource(result);
  //     } catch (error) {
  //       console.log(error);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   }
  // }, [timeRange.value, tokenFrom, tokenTo]);

  // useEffect(() => {
  //   void getData();
  // }, [getData]);

  return (
    <Box h={400} pos="relative">
      <LoadingOverlay visible={isLoading} />

      <ResponsiveContainer>
        <AreaChart data={dataSource}>
          <defs>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="rgba(117, 49, 203, 0.2)" stopOpacity={0.8} />
              <stop offset="95%" stopColor="rgba(117, 49, 203, 0.2)" stopOpacity={0} />
            </linearGradient>
          </defs>

          <XAxis dataKey="time" />

          <Tooltip
            cursor={{ stroke: "#ffffff30" }}
            isAnimationActive={false}
            contentStyle={{
              background: "#444444",
              border: "none",
            }}
          />

          <Area
            type="monotone"
            dataKey="value"
            stroke={colors.PRIMARY_COLOR}
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#colorPv)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </Box>
  );
};

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
