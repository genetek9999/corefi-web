import { Accordion, Center, Flex, Group, Input, type MantineTheme, type Sx, Text } from "@mantine/core";
import { useFocusWithin } from "@mantine/hooks";
import { nanoid } from "nanoid";
import React, { useRef } from "react";
import { BiInfoCircle } from "react-icons/bi";
import { colors } from "~/constants";
import { slippageOptions, useSlippage } from "~/features/Swap/hooks";

export const Slippage = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { ref: focusRef, focused } = useFocusWithin();
  const [value, setValue] = useSlippage((state) => [state.value, state.setValue]);

  return (
    <Accordion variant="filled" radius="xs">
      <Accordion.Item
        value="0"
        sx={{
          "&[data-active]": {
            backgroundColor: "transparent",
          },
        }}
      >
        <Accordion.Control
          pl={0}
          w="auto"
          sx={{ ".mantine-Accordion-label": { flex: "auto" }, ".mantine-Accordion-chevron": { marginLeft: 5 } }}
        >
          <Group spacing={4}>
            <Text c="#fff" fz={{ base: 12 }} fw={500} lh="1em !important">
              Max Slippage
            </Text>

            <BiInfoCircle size={14} />

            <Text c="#fff" fz={{ base: 12 }} fw={500} lh="1em !important">
              :&nbsp; {value}%
            </Text>
          </Group>
        </Accordion.Control>

        <Accordion.Panel sx={{ ".mantine-Accordion-content": { padding: 0 } }}>
          <Flex gap={2} align="stretch" mb="lg" p={2} sx={{ borderRadius: 20 }} bg="rgba(255, 255, 255, 0.1)" h="100%">
            {slippageOptions.map((item) => (
              <Center
                key={nanoid()}
                mih="100%"
                sx={sxWrapperSelect}
                fz={{ base: 12 }}
                onClick={() => {
                  setValue(item);

                  if (inputRef.current?.value) {
                    inputRef.current.value = "";
                  }
                }}
                className={value?.toString() === item.toString() ? "active" : ""}
              >
                {item}%
              </Center>
            ))}

            <Flex
              gap={5}
              sx={sxWrapperInput}
              align="center"
              px="sm"
              className={focused || value === inputRef.current?.value ? "active" : ""}
              ref={focusRef}
            >
              <Input
                ref={inputRef}
                variant="unstyled"
                sx={{
                  "*": { fontSize: 12, fontWeight: 500 },
                  input: {
                    color: "#fff",
                    height: "auto",
                    textAlign: "right",
                    "&::placeholder": {
                      color: "#ffffff50",
                    },
                  },
                }}
                placeholder="Custom"
                onBlur={() => {
                  if (!inputRef.current?.value) {
                    return setValue(slippageOptions[0]);
                  }
                  if (slippageOptions.some((item) => item.toString() === value?.toString())) {
                    inputRef.current.value = "";
                  }
                }}
                onChange={(e) => setValue(e.target.value)}
              />

              <Text fz={{ base: 12 }}>%</Text>
            </Flex>
          </Flex>
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
};

const sxWrapper: Sx = {
  borderRadius: 20,
  flex: 1,
  border: "2px solid transparent",
  transition: "all 0.1s ease-in-out",

  lineHeight: "1em !important",
  fontWeight: 500,

  "*": {
    lineHeight: "1em !important",
  },

  "&.active": { borderColor: colors.PRIMARY_COLOR },
};

const sxWrapperSelect = (theme: MantineTheme) => ({
  ...sxWrapper,
  cursor: "pointer",
  "&:hover": { backgroundColor: theme.fn.darken(colors.PRIMARY_COLOR, 0.1) },
  "&.active": { backgroundColor: colors.PRIMARY_COLOR },
});

const sxWrapperInput = {
  ...sxWrapper,
  overflow: "hidden",
  "&:hover": { borderColor: colors.PRIMARY_COLOR },
};
