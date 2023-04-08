import { Box, Container, Flex, Group, Text, Title } from "@mantine/core";
import { type NextPage } from "next";
import { useCallback, useState } from "react";
import { Page, Section } from "~/components";
import { TokenProvider } from "~/contexts/tokenContext";
import { ButtonClaim, ButtonStake, EstimatedInfo, InputAmount, SelectType, TextBalance } from "~/features/Staking";
import { useRefPortal } from "~/hooks/useRefPortal";

const stakeType = {
  oneMonth: {
    label: "1 month",
    value: "0",
    apy: 100,
    duration: 1,
  },
};

const Staking: NextPage = () => {
  const inputRef = useRefPortal<typeof InputAmount>();
  const infoRef = useRefPortal<typeof EstimatedInfo>();
  const [selectedStakeId, setSelectedStakeId] = useState(stakeType.oneMonth.value);

  console.log("rerender staking");

  return (
    <TokenProvider>
      <Page bg="black">
        <Section h="100vh">
          <Flex direction="column" align="center" justify="center" h="50%">
            <Title mb={50}>Try out STAKING feature!</Title>

            <Container fluid>
              <Box mt={16} p={12} sx={{ borderRadius: "12px" }} bg={"#ffffff26"}>
                <Flex align={"center"} justify={"space-between"}>
                  <Text fw={600} fz={14} c={"white"}>
                    Stake
                  </Text>

                  <TextBalance />
                </Flex>

                <InputAmount
                  ref={inputRef}
                  setStakeAmountNumber={(amount) => {
                    infoRef.current?.setStakeAmountNumber(amount);
                  }}
                />
              </Box>

              <SelectType
                selectedStakeId={selectedStakeId}
                setSelectedStakeId={setSelectedStakeId}
                stakeType={stakeType}
              />

              <EstimatedInfo selectedStakeId={selectedStakeId} ref={infoRef} stakeType={stakeType} />

              <Group noWrap mt="xl">
                <ButtonStake
                  selectedStakeId={selectedStakeId}
                  setStakeAmount={inputRef.current?.setStakeAmount}
                  stakeAmount={inputRef.current?.stakeAmount}
                  stakeAmountNumber={infoRef.current?.stakeAmountNumber}
                />

                <ButtonClaim />
              </Group>
            </Container>
          </Flex>
        </Section>
      </Page>
    </TokenProvider>
  );
};

export default Staking;
