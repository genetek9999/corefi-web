import { Box, Button, Group, LoadingOverlay, Text } from "@mantine/core";
import moment from "moment";
import { nanoid } from "nanoid";
import React, { useEffect, useState } from "react";
import { type IStakeOption, useStaking } from "~/hooks/useStaking";

type Props = {
  optionList: IStakeOption[];
};

export const UserStake: React.FC<Props> = ({ optionList }) => {
  const { getUserStakeList, userStakeList, claim } = useStaking();
  const [isClaiming, setIsClaiming] = useState(false);

  useEffect(() => {
    void getUserStakeList();
  }, [getUserStakeList]);

  const handleClaim = async (id: string) => {
    try {
      setIsClaiming(true);

      const result = await claim(id);

      await result.wait();
    } catch (error) {
      console.log(error);
    } finally {
      setIsClaiming(false);
    }
  };

  return (
    <Box mt="xl" pos="relative">
      <Text fw="bold" mb="xs" pt="xl">
        Stake list
      </Text>

      <LoadingOverlay visible={isClaiming} />

      {userStakeList.map(({ id, amount, start, claimed, claimTime, optionId }) => {
        if (claimed) return <></>;

        const stakeDuration = optionList.find((item) => item.id === optionId)?.duration || 0;

        const calcClaimTime = moment.unix(start + stakeDuration);

        const isValidToClaim = moment().isSameOrAfter(calcClaimTime);

        return (
          <Box key={nanoid()} bg="#333" p="sm" sx={{ borderRadius: 10 }} mb="xs">
            <Group position="apart">
              <Text>Amount: {amount} KYC</Text>

              <Text>Stake at: {moment.unix(start).format("DD/MM/YYYY HH:mm:ss")}</Text>
            </Group>

            <Text>
              Claim at:{" "}
              {claimTime
                ? moment.unix(claimTime).format("DD/MM/YYYY HH:mm:ss")
                : calcClaimTime.format("DD/MM/YYYY HH:mm:ss")}
            </Text>

            <Button fullWidth mt="xs" onClick={() => void handleClaim(id)}>
              {claimTime ? "Withdraw" : isValidToClaim ? "Claim" : "Unstake"}
            </Button>
          </Box>
        );
      })}
    </Box>
  );
};
