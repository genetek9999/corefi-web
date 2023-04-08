import { Box, Group, Text } from "@mantine/core";
import React, { type ForwardRefRenderFunction, forwardRef, memo, useImperativeHandle, useMemo, useState } from "react";

type Ref = {
  stakeAmountNumber: number;
  setStakeAmountNumber: React.Dispatch<React.SetStateAction<number>>;
};

type Props = {
  stakeType: NodeJS.Dict<{
    label: string;
    value: string;
    apy: number;
    duration: number;
  }>;
  selectedStakeId: string;
};

const _EstimatedInfo: ForwardRefRenderFunction<Ref, Props> = ({ stakeType, selectedStakeId }, ref) => {
  const [stakeAmountNumber, setStakeAmountNumber] = useState(0);

  useImperativeHandle(ref, () => ({
    stakeAmountNumber,
    setStakeAmountNumber,
  }));

  const selectedStake = useMemo(() => {
    const stake = Object.values(stakeType).find((item) => item?.value === selectedStakeId);

    if (!stake) return stakeType.oneMonth;

    return stake;
  }, [selectedStakeId, stakeType]);

  const selectedStakeApy = useMemo(() => selectedStake?.apy, [selectedStake]);

  const estimatedReward = useMemo(() => {
    const duration = 12 / (selectedStake?.duration || 1);

    const APY = (selectedStake?.apy || 0) / 100;

    return ((stakeAmountNumber * APY) / duration).toFixed(2);
  }, [selectedStake?.apy, selectedStake?.duration, stakeAmountNumber]);

  return (
    <Box mt={16} p={12} sx={{ borderRadius: "12px" }} bg={"#ffffff26"} fz={{ base: ".9rem" }}>
      <Group position="apart" mb={5}>
        <Text c="#fff">APY:</Text>

        <Text c="#fff" fw="bold">
          {selectedStakeApy}%
        </Text>
      </Group>

      <Group position="apart">
        <Text c="#fff">Estimated reward:</Text>

        <Text c="#fff" fw="bold">
          {estimatedReward} JYC
        </Text>
      </Group>
    </Box>
  );
};

const __EstimatedInfo = forwardRef<Ref, Props>(_EstimatedInfo);

export const EstimatedInfo = memo(__EstimatedInfo);
