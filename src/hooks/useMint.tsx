import { showNotification } from "@mantine/notifications";
import { useCallback, useState } from "react";
import { useMetamask } from "~/contexts";
import { getMintContract } from "~/helpers/mintContract";
import { calcGasLimit, parseEther } from "~/libs/ethers";
import { type Mint } from "~/typechain-owned";

const MINT_COST = 0;

export const useMint = () => {
  const { address, isCorrectChain } = useMetamask();
  const [isLoading, setIsLoading] = useState(false);

  const getContract = useCallback(() => {
    if (!isCorrectChain) throw "Not correct chain";

    return getMintContract();
  }, [isCorrectChain]);

  const mint = useCallback(
    async (amount = 1) => {
      try {
        setIsLoading(true);

        const contract = getContract();

        const amountEther = parseEther(`${MINT_COST * amount}`);

        const params = {
          from: address,
          value: amountEther._hex,
        };

        const estimateGas = await contract.estimateGas.mint(amount, params);

        const result = await contract.mint(amount, {
          ...params,
          gasLimit: calcGasLimit(estimateGas),
        });

        await result.wait();

        showNotification({
          color: "green",
          message: "Mint successfully!",
        });
      } catch (error) {
        console.log(error);

        showNotification({
          color: "red",
          message: "Mint failed!",
        });
      } finally {
        setIsLoading(false);
      }
    },
    [address, getContract],
  );

  return { mint, isLoading };
};

export const useGetList = ({ isOwned = false }) => {
  const { address, isCorrectChain } = useMetamask();
  const [listNft, setListNft] = useState<Mint.MintedNftStructStructOutput[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const getContract = useCallback(() => {
    if (!isCorrectChain) throw "Not correct chain";

    return getMintContract();
  }, [isCorrectChain]);

  const getList = useCallback(async () => {
    try {
      setIsLoading(true);

      const contract = getContract();

      let result = await contract.getAllNFTs();

      if (isOwned) {
        result = result.filter(({ buyer }) => buyer === address);
      }

      setListNft(result);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, [address, getContract, isOwned]);

  return { listNft, getList, isLoading };
};
