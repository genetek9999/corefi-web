import { SegmentedControl } from "@mantine/core";
import React, { memo } from "react";

type Props = {
  stakeType: NodeJS.Dict<{
    label: string;
    value: string;
  }>;
  selectedStakeId: string;
  setSelectedStakeId: React.Dispatch<React.SetStateAction<string>>;
};

const _SelectType: React.FC<Props> = ({ stakeType, selectedStakeId, setSelectedStakeId }) => {
  return (
    <SegmentedControl
      mt="md"
      radius="md"
      data={
        stakeType
          ? Object.values(stakeType).map((item) => ({
              label: item?.label || "",
              value: item?.value || "",
            }))
          : []
      }
      fullWidth
      color="blue"
      value={selectedStakeId}
      onChange={setSelectedStakeId}
    />
  );
};

export const SelectType = memo(_SelectType);
