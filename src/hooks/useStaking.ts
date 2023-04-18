import { type BigNumber, type BytesLike } from "ethers";
import { useCallback, useState } from "react";

import { useMetamask } from "../contexts/metamaskContext";
import { getStakingContract } from "../helpers/stakingContract";
import { calcGasLimit, formatBigNumber } from "../libs/ethers";

export interface IStakeOption {
  id: string;
  apy: number;
  duration: number;
}

export interface IUserStake {
  id: string;
  amount: number;
  claimed: boolean;
  start: number;
  claimTime: number;
  optionId: string;
}

export const useStaking = () => {
  const { address, isCorrectChain } = useMetamask();
  const [totalStaked, setTotalStaked] = useState(0);
  const [optionList, setOptionList] = useState<IStakeOption[]>([]);
  const [userStakeList, setUserStakeList] = useState<IUserStake[]>([]);
  const [fee, setFee] = useState<[number, number]>([0, 0]);

  const getContract = useCallback(() => {
    if (!isCorrectChain) throw "Not correct chain";

    return getStakingContract();
  }, [isCorrectChain]);

  const decodeInputStakeFunc = useCallback(
    (value: BytesLike) => {
      try {
        const contract = getContract();

        const data = contract.interface.decodeFunctionData("stake(uint256,uint256)", value) as BigNumber[];

        if (data[1]) {
          return formatBigNumber(data[1]);
        }

        return 0;
      } catch (error) {
        console.log(error);

        return 0;
      }
    },
    [getContract],
  );

  const getOptionList = useCallback(async () => {
    try {
      const contract = getContract();

      const totalOptions = formatBigNumber(await contract.totalStake());

      console.log("total options", totalOptions);

      const options: IStakeOption[] = [];

      for (let i = 0; i < totalOptions; i++) {
        const element = await contract.stakes(i);

        const data = {
          id: `${i}`,
          apy: parseFloat(element.apy.toString()),
          duration: parseFloat(element.duration.toString()),
        };

        options.push(data);
      }

      console.log(options);

      setOptionList(options);
    } catch (error) {
      console.log(error);
    }
  }, [getContract]);

  const getTotalStaked = useCallback(async () => {
    try {
      const contract = getContract();

      const total = formatBigNumber(await contract.totalStakedAmount());

      setTotalStaked(total);
    } catch (error) {
      console.log(error);
    }
  }, [getContract]);

  const stake = async (stakeId = 0, amountEther: BigNumber) => {
    if (address) {
      const contract = getContract();

      const estimateGas = await contract.estimateGas.stake(stakeId, amountEther);

      return await contract.stake(stakeId, amountEther, { gasLimit: calcGasLimit(estimateGas) });
    }

    throw "[Stake] No contract or address found";
  };

  const getUserStakeList = useCallback(async () => {
    try {
      const contract = getContract();

      const result = await contract.getUserStakeIdList(address);

      const list: IUserStake[] = [];

      for (let i = 0; i < result.length; i++) {
        const idBigNumber = result[i];

        if (idBigNumber) {
          const id = parseInt(idBigNumber._hex);

          const userStake = await contract.userStakes(id);

          const amount = formatBigNumber(userStake.amount);

          const start = parseInt(userStake.start.toString());

          const claimTime = parseInt(userStake.claimTime.toString());

          list.push({
            id: `${id}`,
            amount,
            claimed: userStake.claimed,
            start,
            claimTime,
            optionId: formatBigNumber(userStake.stakeId).toString(),
          });
        }
      }

      console.log(list);

      setUserStakeList(list);
    } catch (error) {
      console.log(error);
    }
  }, [address, getContract]);

  const claim = async (id: string) => {
    if (address) {
      const contract = getContract();

      const estimateGas = await contract.estimateGas.claim(id);

      return await contract.claim(id, { gasLimit: calcGasLimit(estimateGas) });
    }

    throw "[Claim] No contract or address found";
  };

  const getFee = useCallback(async () => {
    try {
      const contract = getContract();

      const stakeFee = formatBigNumber(await contract.stakeFee());
      const unstakeFee = formatBigNumber(await contract.unstakeFee());

      setFee([stakeFee, unstakeFee]);
    } catch (error) {
      console.log(error);
    }
  }, [getContract]);

  return {
    stake,
    claim,
    decodeInputStakeFunc,
    getTotalStaked,
    totalStaked,
    getOptionList,
    optionList,
    getUserStakeList,
    userStakeList,
    getFee,
    fee,
  };
};
