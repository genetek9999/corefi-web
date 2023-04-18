import { AspectRatio, Flex, Group, NumberInput, Text } from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import { BigNumber } from "ethers";
import React, { useMemo, useState } from "react";
import { ZodError, z } from "zod";
import { Logo } from "~/assets/vectors";
import { ButtonCommon } from "~/components";
import { contracts, keys } from "~/constants";
import { useMetamask } from "~/contexts";
import { useTokenContext } from "~/contexts/tokenContext";
import { env } from "~/env.mjs";
import { useStaking } from "~/hooks/useStaking";
import { parseEther } from "~/libs/ethers";
import { api } from "~/utils";

const STAKING_ADDRESS = contracts.staking;
const amountSchema = z.number().gt(0);

export const InputAmount = () => {
  const { refetch: refetchTotalStaked } = api.staking.getTotalStaked.useQuery(undefined, { enabled: false });
  const { balance, getAllowance, approve, getBalance } = useTokenContext();
  const { address, connect, isCorrectChain, setupDefaultNetwork } = useMetamask();
  const [amount, setAmount] = useState<number | undefined>();
  const { stake } = useStaking();
  const [isStaking, setIsStaking] = useState(false);
  const { refetch: refetchHistory } = api.staking.getHistory.useQuery(undefined, { enabled: false });

  const buttonText = useMemo(() => {
    if (!address) {
      return "Connect wallet";
    } else if (!isCorrectChain) {
      return `Switch to ${env.NEXT_PUBLIC_NETWORK_NAME || ""}`;
    } else {
      return "Stake";
    }
  }, [address, isCorrectChain]);

  const handleClickSubmit = () => {
    if (!address) {
      connect();
    } else if (!isCorrectChain) {
      void setupDefaultNetwork();
    } else {
      void handleStake();
    }
  };

  const handleStake = async () => {
    try {
      await amountSchema.parseAsync(amount);

      if (amount) {
        if (amount > balance) throw "Invalid amount!";

        setIsStaking(true);

        const amountEther = parseEther(amount.toString());

        if (getAllowance) {
          const allowance = await getAllowance(STAKING_ADDRESS);

          console.log("Allowance checked!", allowance);

          if (allowance.lt(BigNumber.from(amountEther)) && approve) {
            const result = await approve(STAKING_ADDRESS);

            await result.wait();

            console.log("Approve checked!", result);
          }

          const result = await stake(keys.STAKE_OPTION_ID, amountEther);

          await result.wait();

          console.log("Stake checked!", result);

          setAmount(undefined);

          await getBalance();

          await refetchTotalStaked();

          await refetchHistory();

          showNotification({
            color: "green",
            message: "Stake successfully!",
          });
        }
      }
    } catch (error) {
      console.log(error);

      let message = "Stake failed!";

      if (error instanceof ZodError) {
        message = "Invalid amount!";
      }

      showNotification({ color: "red", message });
    } finally {
      setIsStaking(false);
    }
  };

  return (
    <>
      <Flex
        gap={10}
        align="stretch"
        bg="linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0) 100%)"
        py={5}
        pl={20}
        pr={5}
        sx={{ borderRadius: 16, border: "1px solid #E2E8F033", "&,*": { fontSize: 14 }, input: { color: "#fff" } }}
        mb={20}
      >
        <NumberInput
          value={amount}
          onChange={setAmount}
          variant="unstyled"
          placeholder="Enter Amount"
          sx={{ flex: 1 }}
          min={0}
        />

        <Group spacing={7} bg="rgba(255,255,255,0.1)" sx={{ borderRadius: 12 }} px="xs">
          <AspectRatio ratio={1} w={18}>
            <Logo />
          </AspectRatio>

          <Text lh="1em !important" fw={500} fz={12}>
            COREFI
          </Text>
        </Group>
      </Flex>

      <ButtonCommon
        fullWidth
        bg="radial-gradient(80% 80% at 50% 50%, rgba(255, 255, 255, 0.24) 0%, rgba(255, 255, 255, 0) 100%)"
        sx={{
          border: "1px solid rgba(255, 255, 255, 0.1)",
        }}
        py={15}
        tt="capitalize"
        onClick={() => void handleClickSubmit()}
        loading={isStaking}
      >
        {buttonText}
      </ButtonCommon>
    </>
  );
};
