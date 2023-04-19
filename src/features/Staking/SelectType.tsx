import { SegmentedControl } from "@mantine/core";
import React, { memo } from "react";
import { type IStakeOption } from "~/hooks/useStaking";

import { useSelectOption } from "./hooks/useSelectOption";

type Props = {
  optionList: IStakeOption[];
};

const _SelectType: React.FC<Props> = ({ optionList }) => {
  const [selectedStakeId, setSelectedStakeId] = useSelectOption((state) => [state.value, state.setValue]);

  return (
    <SegmentedControl
      mt="md"
      radius="md"
      data={optionList.map((item) => ({
        label: item.duration,
        value: item.id,
      }))}
      fullWidth
      color="blue"
      value={selectedStakeId}
      onChange={setSelectedStakeId}
    />
  );
};

export const SelectType = memo(_SelectType);
