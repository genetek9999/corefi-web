import { Button } from "@mantine/core";
import { cleanNotifications, showNotification } from "@mantine/notifications";
import { BigNumber } from "ethers";
import React, { memo, useState } from "react";
import { ZodError, z } from "zod";
import { contracts } from "~/constants";
import { useTokenContext } from "~/contexts/tokenContext";
import { useStaking } from "~/hooks/useStaking";
import { parseEther } from "~/libs/ethers";

import { useSelectOption } from "./hooks/useSelectOption";
import { useStakeAmount } from "./hooks/useStakeAmount";
import { useStakeAmountNumber } from "./hooks/useStakeAmountNumber";

const STAKING_ADDRESS = contracts.staking;

const stakeAmountSchema = z.number().gt(0);

const _ButtonStake = () => {
  const { balance, getAllowance, approve, getBalance } = useTokenContext();
  const selectedStakeId = useSelectOption((state) => state.value);
  const [stakeAmount, setStakeAmount] = useStakeAmount((state) => [state.value, state.setValue]);
  const stakeAmountNumber = useStakeAmountNumber((state) => state.value);

  const { stake } = useStaking();
  const [isStaking, setIsStaking] = useState(false);

  const handleStake = async () => {
    if (stakeAmount && setStakeAmount) {
      cleanNotifications();

      try {
        await stakeAmountSchema.parseAsync(stakeAmountNumber);

        if (stakeAmountNumber && stakeAmountNumber > balance) throw "Invalid amount!";

        setIsStaking(true);

        const amountEther = parseEther(stakeAmount);

        if (getAllowance && selectedStakeId) {
          const allowance = await getAllowance(STAKING_ADDRESS);

          console.log("allowance checked", allowance);

          if (allowance.lt(BigNumber.from(amountEther)) && approve) {
            const result = await approve(STAKING_ADDRESS);

            await result.wait();

            console.log("approve checked", result);
          }

          const result = await stake(parseInt(selectedStakeId), amountEther);

          await result.wait();

          console.log("stake checked", result);

          setStakeAmount("");

          await getBalance();

          showNotification({
            color: "green",
            message: "Stake successfully!",
          });
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
    }
  };

  return (
    <Button fullWidth variant="gradient" tt="uppercase" loading={isStaking} onClick={() => void handleStake()}>
      Approve
    </Button>
  );
};

export const ButtonStake = memo(_ButtonStake);
