import { Box, Group, Text } from "@mantine/core";
import React, { memo, useEffect, useMemo } from "react";
import { type IStakeOption, useStaking } from "~/hooks/useStaking";
import { formatPrice } from "~/utils";

import { useSelectOption } from "./hooks/useSelectOption";
import { useStakeAmountNumber } from "./hooks/useStakeAmountNumber";

type Props = {
  optionList: IStakeOption[];
};

const _EstimatedInfo: React.FC<Props> = ({ optionList }) => {
  const selectedStakeId = useSelectOption((state) => state.value);
  const stakeAmountNumber = useStakeAmountNumber((state) => state.value);

  const selectedStake = useMemo(() => {
    const stake = optionList.find((item) => item?.id === selectedStakeId);

    return stake;
  }, [optionList, selectedStakeId]);

  const selectedStakeApy = useMemo(() => selectedStake?.apy || 0, [selectedStake]);

  const estimatedReward = useMemo(() => {
    return (
      (stakeAmountNumber * (selectedStake?.apy || 0) * (selectedStake?.duration || 1)) /
      (100 * 365 * 24 * 60 * 60)
    ).toFixed(5);
  }, [selectedStake?.apy, selectedStake?.duration, stakeAmountNumber]);

  return (
    <Box mt={16} p={12} sx={{ borderRadius: "12px" }} bg={"#ffffff26"} fz={{ base: ".9rem" }}>
      <Group position="apart" mb={5}>
        <Text c="#fff">APY:</Text>

        <Text c="#fff" fw="bold">
          {formatPrice(selectedStakeApy, null)}%
        </Text>
      </Group>

      <Group position="apart">
        <Text c="#fff">Estimated reward:</Text>

        <Text c="#fff" fw="bold">
          {estimatedReward} KYC
        </Text>
      </Group>
    </Box>
  );
};

export const EstimatedInfo = memo(_EstimatedInfo);
