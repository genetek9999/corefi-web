import { Box, Center, Divider, Flex, type FlexProps, Grid, Text, Title } from "@mantine/core";
import { cleanNotifications, showNotification } from "@mantine/notifications";
import moment from "moment";
import { nanoid } from "nanoid";
import React, { useEffect, useMemo, useState } from "react";
import { ButtonCommon } from "~/components";
import { keys } from "~/constants";
import { useMetamask } from "~/contexts";
import { useTokenContext } from "~/contexts/tokenContext";
import { env } from "~/env.mjs";
import { type IUserStake, useStaking } from "~/hooks/useStaking";
import { api } from "~/utils";

export const ClaimSection = () => {
  const { address, connect, isCorrectChain, setupDefaultNetwork } = useMetamask();
  const { getUserStakeList, userStakeList } = useStaking();

  useEffect(() => {
    void getUserStakeList();
  }, [getUserStakeList]);

  const buttonText = useMemo(() => {
    if (!address) {
      return "Connect wallet";
    } else if (!isCorrectChain) {
      return `Switch to ${env.NEXT_PUBLIC_NETWORK_NAME || ""}`;
    } else {
      return "";
    }
  }, [address, isCorrectChain]);

  const handleClickSubmit = () => {
    if (!address) {
      connect();
    } else if (!isCorrectChain) {
      void setupDefaultNetwork();
    }
  };

  return (
    <>
      <Title order={2} fz={{ base: 20 }} fw={600} mt={40} mb="md">
        Claim / Unstake
      </Title>

      {!address || !isCorrectChain ? (
        <ButtonCommon
          fullWidth
          bg="radial-gradient(80% 80% at 50% 50%, rgba(255, 255, 255, 0.24) 0%, rgba(255, 255, 255, 0) 100%)"
          sx={{
            border: "1px solid rgba(255, 255, 255, 0.1)",
          }}
          py={15}
          tt="capitalize"
          onClick={() => void handleClickSubmit()}
        >
          {buttonText}
        </ButtonCommon>
      ) : (
        <Box
          sx={{
            borderRadius: 12,
            border: "1px solid #ffffff25",
          }}
          bg="linear-gradient(180deg, rgba(236, 236, 254, 0.1) 0%, rgba(236, 236, 254, 0) 100%)"
          p="md"
          mt="xs"
        >
          {!userStakeList.length ? (
            <Center h={150} tt="uppercase" fw="bold">
              No data
            </Center>
          ) : (
            userStakeList.map((item, index) => (
              <Box key={nanoid()}>
                <Card data={item} refetch={getUserStakeList}>
                  {!index && <Divider mt="xs" pb="xs" />}
                </Card>
              </Box>
            ))
          )}
        </Box>
      )}
    </>
  );
};

type Props = FlexProps & {
  data: IUserStake;
  refetch: () => Promise<void>;
};

const Card: React.FC<Props> = ({ children, data: { amount, claimTime, claimed, start, id }, refetch, ...props }) => {
  const { isCorrectChain, setupDefaultNetwork } = useMetamask();
  const { claim } = useStaking();
  const [isClaiming, setIsClaiming] = useState(false);
  const { getBalance } = useTokenContext();
  const { refetch: refetchTotalStaked } = api.staking.getTotalStaked.useQuery(undefined, { enabled: false });
  const { refetch: refetchHistory } = api.staking.getHistory.useQuery(undefined, { enabled: false });
  const { refetch: refetchChart } = api.staking.getTotalStakedChart.useQuery(undefined, { enabled: false });

  const handleClaim = async (id: string) => {
    if (!isCorrectChain) await setupDefaultNetwork();

    cleanNotifications();

    try {
      setIsClaiming(true);

      const result = await claim(id);

      await result.wait();

      await getBalance();

      await refetchTotalStaked();

      await refetch();

      await refetchHistory();

      await refetchChart();

      showNotification({
        color: "green",
        message: `${featureText} successfully!`,
      });
    } catch (error) {
      console.log(error);

      showNotification({ color: "red", message: `${featureText} failed!` });
    } finally {
      setIsClaiming(false);
    }
  };

  const calcClaimTime = useMemo(() => moment.unix(start + keys.STAKE_DURATION_VALUE), [start]);

  const isValidToClaim = useMemo(() => moment().isSameOrAfter(calcClaimTime), [calcClaimTime]);

  const featureText = useMemo(
    () => (!isCorrectChain ? "Switch chain" : claimTime ? "Withdraw" : isValidToClaim ? "Claim" : "Unstake"),
    [claimTime, isCorrectChain, isValidToClaim],
  );

  if (claimed) return <></>;

  return (
    <>
      <Flex gap={10} align="center" justify="space-between" {...props}>
        <Grid sx={{ flex: 1 }}>
          <Grid.Col span={6} fw={500}>
            <Text fz={14}>{moment.unix(start).format("YYYY-MM-DD HH:mm:ss")}</Text>
          </Grid.Col>

          <Grid.Col span={6} fw={500}>
            <Text fz={14}>{amount} COREFI</Text>
          </Grid.Col>
        </Grid>

        <ButtonCommon
          bg="radial-gradient(80% 80% at 50% 50%, rgba(255, 255, 255, 0.24) 0%, rgba(255, 255, 255, 0) 100%)"
          sx={{
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: 16,
          }}
          tt="capitalize"
          py={10}
          onClick={() => void handleClaim(id)}
          loading={isClaiming}
        >
          {featureText}
        </ButtonCommon>
      </Flex>

      {children}
    </>
  );
};
