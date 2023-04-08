import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import { env } from "~/env.mjs";
import { getChain } from "~/libs/ethers";
import {
  type ErrorSwitchChain,
  type IChain,
  addChain,
  getAccount,
  getConnectedAccount,
  startAccountListener,
  startChainListener,
  stopAllListeners,
} from "~/libs/metamask";

import { switchChain } from "../libs/metamask";

const data: IChain = {
  chainId: env.NEXT_PUBLIC_CHAIN_ID || "",
  chainName: env.NEXT_PUBLIC_NETWORK_NAME || "",
  symbol: env.NEXT_PUBLIC_SYMBOL || "",
  rpcUrl: env.NEXT_PUBLIC_NEW_RPC_URL || "",
  decimals: env.NEXT_PUBLIC_CURRENCY_DECIMALS || "",
};

interface IDataChain {
  name: string;
  chainId: number;
}

interface IMetamaskContext {
  address: string;
  chain?: IDataChain;
  connect: () => void;
  isValidating: boolean;
  isCorrectChain: boolean;
}

type PropsProvider = { children: React.ReactNode };

export const MetamaskContext = createContext<IMetamaskContext>({
  address: "",
  connect: () => undefined,
  isValidating: true,
  isCorrectChain: false,
});

export const useMetamask = () => useContext(MetamaskContext);

export const MetamaskProvider: React.FC<PropsProvider> = ({ children }) => {
  const effectRan = useRef(false);
  const [address, setAddress] = useState("");
  const [chain, setChain] = useState<IDataChain | undefined>();
  const [isValidating, setIsValidating] = useState(true);

  const isCorrectChain = useMemo(() => {
    return chain?.chainId.toString() === env.NEXT_PUBLIC_CHAIN_ID;
  }, [chain?.chainId]);

  const startAllListeners = useCallback(() => {
    startChainListener(updateChain);

    startAccountListener(setAddress, handleChangeAccountFailed);
  }, []);

  const setupDefaulNetwork = useCallback(async () => {
    if (data.chainId) {
      try {
        await switchChain(data.chainId);
      } catch (error) {
        const errorParsed = JSON.parse(JSON.stringify(error)) as ErrorSwitchChain;

        if (errorParsed.code === 4902) {
          await addChain(data);
        }
      }
    }
  }, []);

  const updateInfo = useCallback(
    async (asyncGetAccount: () => Promise<string>) => {
      const chainId = await updateChain();

      const account = await asyncGetAccount();

      setAddress(account);

      startAllListeners();

      setIsValidating(false);

      if (chainId.toString() !== data.chainId) {
        await setupDefaulNetwork();
      }
    },
    [setupDefaulNetwork, startAllListeners],
  );

  const initData = useCallback(async () => {
    console.log("Inititalize data...");

    try {
      await updateInfo(getConnectedAccount);
    } catch (error) {
      console.log("ERROR - Inititalize data:", error);

      setIsValidating(false);
    }
  }, [updateInfo]);

  useEffect(() => {
    if (effectRan.current) {
      void initData();
    } else {
      effectRan.current = true;
    }
  }, [initData]);

  const connect = useCallback(async () => {
    try {
      await updateInfo(getAccount);
    } catch (error) {
      alert(error);
    }
  }, [updateInfo]);

  const updateChain = async () => {
    const { name, chainId } = await getChain();

    setChain({ name, chainId });

    return chainId;
  };

  const handleChangeAccountFailed = () => {
    setAddress("");
    setChain(undefined);

    stopAllListeners();
  };

  const value = useMemo(
    () => ({
      address,
      connect,
      chain,
      isValidating,
      setupDefaulNetwork,
      isCorrectChain,
    }),
    [address, chain, connect, isCorrectChain, isValidating, setupDefaulNetwork],
  );

  return <MetamaskContext.Provider value={value}>{children}</MetamaskContext.Provider>;
};
