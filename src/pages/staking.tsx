import { Box, Container, Flex, Group, Text, Title } from "@mantine/core";
import { type NextPage } from "next";
import { useEffect, useState } from "react";
import { Page, Section } from "~/components";
import { TokenProvider } from "~/contexts/tokenContext";
import {
  ButtonClaim,
  ButtonStake,
  EstimatedInfo,
  Info,
  InputAmount,
  SelectType,
  TextBalance,
  UserStake,
} from "~/features/Staking";
import { useSelectOption } from "~/features/Staking/hooks/useSelectOption";
import { useRefPortal } from "~/hooks/useRefPortal";
import { useStaking } from "~/hooks/useStaking";

const Staking: NextPage = () => {
  const { optionList, getOptionList } = useStaking();
  const setSelectedOption = useSelectOption((state) => state.setValue);

  useEffect(() => {
    void getOptionList();
  }, [getOptionList]);

  useEffect(() => {
    if (optionList[0]) {
      setSelectedOption(optionList[0].id);
    }
  }, [optionList, setSelectedOption]);

  return (
    <TokenProvider>
      <Page bg="black">
        <Section mih="100vh" size={600}>
          <Title mb={50}>Try out STAKING feature!</Title>

          <Container fluid>
            <Info />

            <Box mt={16} p={12} sx={{ borderRadius: "12px" }} bg={"#ffffff26"}>
              <Flex align={"center"} justify={"space-between"}>
                <Text fw={600} fz={14} c={"white"}>
                  Stake
                </Text>

                <TextBalance />
              </Flex>

              <InputAmount />
            </Box>

            <SelectType optionList={optionList} />

            <EstimatedInfo optionList={optionList} />

            <Group noWrap mt="xl">
              <ButtonStake />

              {/* <ButtonClaim /> */}
            </Group>

            <UserStake optionList={optionList} />
          </Container>
        </Section>
      </Page>
    </TokenProvider>
  );
};

export default Staking;
