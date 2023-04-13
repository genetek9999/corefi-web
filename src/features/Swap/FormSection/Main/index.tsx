import { Box, type BoxProps, Group } from "@mantine/core";
import React from "react";
import { ButtonCommon } from "~/components";
import { colors } from "~/constants";
import { useMetamask } from "~/contexts";

import { useValue } from "../../hooks";
import { BoxDisplay } from "../components";
import { Balance, ButtonSwitch, Exchange, Information, InputFrom, InputTo, Slippage } from "./components";

export const Main = () => {
  const { address, connect } = useMetamask();
  const setValueFrom = useValue((state) => state.setValueFrom);

  const handleClickBalanceFrom = (value: string | number) => {
    setValueFrom(value.toString());
  };

  const handleClickSubmit = () => {
    if (!address) {
      return connect();
    }

    console.log("Swap!");
  };

  return (
    <BoxDisplay value="main">
      <Wrapper>
        <Group position="right" mb={12}>
          <Balance onClick={handleClickBalanceFrom} />
        </Group>

        <InputFrom />
      </Wrapper>

      <Group position="apart" my={12}>
        <Exchange />

        <ButtonSwitch />
      </Group>

      <Wrapper>
        <Group position="right" mb={12}>
          <Balance />
        </Group>

        <InputTo />
      </Wrapper>

      <Slippage />

      <ButtonCommon
        fullWidth
        bg={colors.PRIMARY_COLOR}
        variant="filled"
        tt="capitalize"
        mb={20}
        onClick={handleClickSubmit}
        darkenHover
      >
        {!address ? "Connect wallet" : "Swap"}
      </ButtonCommon>

      <Wrapper p={5}>
        <Information />
      </Wrapper>
    </BoxDisplay>
  );
};

const Wrapper: React.FC<BoxProps> = ({ ...props }) => (
  <Box
    bg="linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.0352) 100%)"
    p={13}
    sx={{
      borderRadius: 16,
    }}
    {...props}
  />
);
