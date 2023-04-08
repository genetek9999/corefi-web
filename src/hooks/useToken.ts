import { type BigNumber } from "ethers";
import { useCallback, useState } from "react";
import { getTokenContract } from "~/helpers/tokenContract";
import { MAX_UINT256, calcGasLimit, formatBigNumber, getChecksumAddress } from "~/libs/ethers";

import { useMetamask } from "../contexts/metamaskContext";

export const useToken = () => {
  const { address, isCorrectChain } = useMetamask();
  const [balance, setBalance] = useState(0);

  const getContract = useCallback(() => {
    if (!isCorrectChain) throw "Not correct chain";

    return getTokenContract();
  }, [isCorrectChain]);

  const getBalance = useCallback(async () => {
    try {
      const contract = getContract();

      const balanceOfCoin = await contract.balanceOf(address);

      const formattedBalance = formatBigNumber(balanceOfCoin);

      setBalance(formattedBalance);
    } catch (error) {
      console.log(error);
    }
  }, [address, getContract]);

  const approve = useCallback(
    async (spender: string) => {
      const contract = getContract();

      const estimateGas = await contract.estimateGas.approve(spender, MAX_UINT256);

      return await contract.approve(spender, MAX_UINT256, { gasLimit: calcGasLimit(estimateGas) });
    },
    [getContract],
  );

  const onTransfer = useCallback(() => {
    try {
      const contract = getContract();

      console.log(`Listening to event "Transfer"...`);

      contract.on("Transfer", (from: string, to: string, amount: BigNumber) => {
        from = getChecksumAddress(from);
        to = getChecksumAddress(to);
        const formattedAmont = formatBigNumber(amount);

        if (from === address || to === address) {
          console.log(`Receive transfer ${formattedAmont} JYC from ${from} to ${to}`);

          void getBalance();
        }
      });
    } catch (error) {
      console.log(error);
    }
  }, [address, getBalance, getContract]);

  const getAllowance = useCallback(
    async (spender: string) => {
      const contract = getContract();

      const estimateGas = await contract.estimateGas.allowance(address, spender);

      return await contract.allowance(address, spender, { gasLimit: calcGasLimit(estimateGas) });
    },
    [address, getContract],
  );

  return { balance, getBalance, onTransfer, getAllowance, approve };
};
