import { type BigNumber, type BytesLike } from "ethers";
import { useCallback } from "react";

import { useMetamask } from "../contexts/metamaskContext";
import { getStakingContract } from "../helpers/stakingContract";
import { calcGasLimit, formatBigNumber } from "../libs/ethers";

export const useStaking = () => {
  const { address, isCorrectChain } = useMetamask();

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

  const stake = async (stakeId = 0, amountEther: BigNumber) => {
    if (address) {
      const contract = getContract();

      const estimateGas = await contract.estimateGas.stake(stakeId, amountEther);

      return await contract.stake(stakeId, amountEther, { gasLimit: calcGasLimit(estimateGas) });
    }

    throw "[Stake] No contract or address found";
  };

  return { stake, decodeInputStakeFunc };
};
