import { SegmentedControl } from "@mantine/core";

import { stakeOptions, useSelectOption } from "./hooks";

const optionList = Object.values(stakeOptions).map((item) => ({
  label: item,
  value: item,
}));

export const OptionSegmented = () => {
  const [value, onChange] = useSelectOption((state) => [state.value, state.setValue]);

  return (
    <SegmentedControl
      value={value}
      onChange={onChange}
      data={optionList}
      fullWidth
      bg="rgba(255, 255, 255, 0.1)"
      h={50}
      sx={{
        "&, .mantine-SegmentedControl-active": { borderRadius: 16 },
        ".mantine-SegmentedControl-active": {
          paddingBlock: 21,
          background: "radial-gradient(70% 70% at 50% 50%, rgba(255, 255, 255, 0.24) 0%, rgba(255, 255, 255, 0) 100%)",
          boxShadow: "0px 2px 2px -2px rgba(0, 0, 0, 0.08), inset 0px 1px 0.5px rgba(255, 255, 255, 0.16)",
        },
        ".mantine-SegmentedControl-label": { paddingBlock: 12, "&, *": { color: "#fff" } },
        ".mantine-SegmentedControl-labelActive": {},
      }}
    />
  );
};
