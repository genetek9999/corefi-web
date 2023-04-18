import { Box, Center, Text, Title } from "@mantine/core";
import React from "react";
import { Area, AreaChart, ResponsiveContainer, Tooltip } from "recharts";
import { colors } from "~/constants";
import { api, formatPrice } from "~/utils";

export const TotalStaked = () => {
  const { data } = api.staking.getTotalStakedChart.useQuery();

  return (
    <Box>
      <Title order={2} fz={{ base: 20 }} fw={600} mb="md">
        Total Staked
      </Title>

      <Center
        tt="uppercase"
        fw="bold"
        h={150}
        bg="linear-gradient(180deg, rgba(236, 236, 254, 0.1) 0%, rgba(236, 236, 254, 0) 100%)"
        sx={{ borderRadius: 20, border: "1px solid rgba(255, 255, 255, 0.1)" }}
      >
        No Data
      </Center>

      {/* <Box
        mt="xl"
        sx={{
          borderRadius: 12,
          border: "1px solid #ffffff25",
        }}
        bg="linear-gradient(180deg, rgba(236, 236, 254, 0.1) 0%, rgba(236, 236, 254, 0) 100%)"
        p={25}
      >
        <div style={{ width: "100%", height: 300 }}>
          <ResponsiveContainer>
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorData" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="rgba(117, 49, 203, 0.2)" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="rgba(117, 49, 203, 0.2)" stopOpacity={0} />
                </linearGradient>
              </defs>

              <Tooltip
                contentStyle={{ background: "rgba(255,255,255,0.1)", border: "none", padding: 15, borderRadius: 15 }}
                labelFormatter={(label, payload) => {
                  let data = "";

                  if (payload[0]) {
                    const dataPayload = JSON.parse(JSON.stringify(payload[0].payload)) as DataProps;

                    data = dataPayload.date;
                  }

                  return <Text fz={12}>{data}</Text>;
                }}
                content={({ payload }) => {
                  if (payload && payload[0]) {
                    const data = JSON.parse(JSON.stringify(payload[0].payload)) as DataProps;

                    return (
                      <Box p="md" bg="rgba(255,255,255,0.1)">
                        <Text fz={14} fw={500} mb={20}>
                          {data.date}
                        </Text>

                        <Text fz={12} tt="uppercase" fw={500} my={5} opacity={0.5}>
                          Total staked (COREFI)
                        </Text>

                        <Text fz={14} fw="bold">
                          {formatPrice(data.total, null)}
                        </Text>
                      </Box>
                    );
                  }

                  return <></>;
                }}
              />

              <Area
                type="natural"
                dataKey="total"
                stroke={colors.PRIMARY_COLOR}
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorData)"
                dot
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </Box> */}
    </Box>
  );
};

type DataProps = {
  date: string;
  total: number;
};
