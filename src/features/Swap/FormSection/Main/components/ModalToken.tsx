import { Avatar, Box, Group, Modal, type ModalProps, Text, Title } from "@mantine/core";
import { nanoid } from "nanoid";
import React, { type ForwardRefRenderFunction, forwardRef, useImperativeHandle, useMemo, useState } from "react";
import { BiInfoCircle } from "react-icons/bi";
import { colors } from "~/constants";
import { useTokenList } from "~/features/Swap/hooks";
import { type PropsCurrency } from "~/helpers/coingecko";

type Ref = {
  open: () => void;
  close: () => void;
};
type Props = Omit<ModalProps, "onClose" | "opened" | "onSelect"> & {
  selectedToken?: PropsCurrency;
  otherTokens: PropsCurrency[];
  onSelect: (token: PropsCurrency) => void;
};

const _ModalToken: ForwardRefRenderFunction<Ref, Props> = ({ onSelect, selectedToken, otherTokens, ...props }, ref) => {
  const [opened, setOpened] = useState(false);
  const tokenList = useTokenList((state) => state.tokenList);

  const tokenFilteredList = useMemo(
    () => tokenList.filter((item) => !otherTokens.includes(item)),
    [otherTokens, tokenList],
  );

  useImperativeHandle(ref, () => ({
    open: handleOpen,
    close: handleClose,
  }));

  const handleOpen = () => {
    setOpened(true);
  };

  const handleClose = () => {
    setOpened(false);
  };

  const handleSelect = (token: PropsCurrency) => {
    if (selectedToken?.id !== token.id) {
      onSelect(token);
    }
  };

  return (
    <Modal
      opened={opened}
      onClose={handleClose}
      title={
        <Group spacing={5}>
          <Title order={4}>Select a token</Title>

          <BiInfoCircle size={18} />
        </Group>
      }
      sx={(theme) => ({
        ".mantine-Paper-root": {
          backgroundColor: theme.fn.lighten(colors.PURPLE_1, 0.025),
        },
      })}
      {...props}
    >
      {tokenFilteredList.map((item) => (
        <Group
          key={nanoid()}
          mt={2}
          spacing={10}
          px="sm"
          py="xs"
          sx={{
            borderRadius: 10,
            cursor: "pointer",
            transition: "all 0.2s ease-in-out",
            "&:hover, &.active": { backgroundColor: "rgba(255,255,255,0.1)" },
          }}
          className={item.id === selectedToken?.id ? "active" : ""}
          onClick={() => handleSelect(item)}
        >
          <Avatar radius="xl" src={item.image} size="sm">
            {item.symbol.toUpperCase()}
          </Avatar>

          <Box>
            <Text tt="uppercase" fw={600}>
              {item.symbol}
            </Text>

            <Text tt="capitalize" opacity={0.5} fz={12}>
              {item.name}
            </Text>
          </Box>
        </Group>
      ))}
    </Modal>
  );
};

export const ModalToken = forwardRef<Ref, Props>(_ModalToken);
