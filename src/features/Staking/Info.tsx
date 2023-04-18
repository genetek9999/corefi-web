import { Box, Group, Text } from "@mantine/core";
import React, { memo, useCallback, useEffect } from "react";
import { useStaking } from "~/hooks/useStaking";

const _Info = () => {
  const { getTotalStaked, totalStaked } = useStaking();
  const initData = useCallback(async () => {
    await getTotalStaked();
  }, [getTotalStaked]);

  useEffect(() => {
    void initData();
  }, [initData]);

  return (
    <Group>
      <Box>
        <Text>Total staked: {totalStaked} KYC</Text>
      </Box>
    </Group>
  );
};

export const Info = memo(_Info);
