import { type MetaMaskInpageProvider } from "@metamask/providers";

import { getChecksumAddress } from "./ethers";

declare const window: {
  ethereum?: MetaMaskInpageProvider;
};

export interface IChain {
  chainId: string;
  chainName: string;
  rpcUrl: string;
  symbol: string;
  decimals: string;
}

export class ErrorSwitchChain {
  code: number;

  constructor(code: number) {
    this.code = code;
  }
}

enum method {
  REQUEST_ACCOUNTS = "eth_requestAccounts",
  SWITCH_CHAIN = "wallet_switchEthereumChain",
  ADD_CHAIN = "wallet_addEthereumChain",
}

enum event {
  CHAIN_CHANGED = "chainChanged",
  ACOUNTS_CHANGED = "accountsChanged",
  DISCONECT = "disconnect",
}

const getProvider = () => {
  const ethereum = window.ethereum;

  if (!ethereum || !ethereum.isMetaMask) throw "Please install metamask extension!";

  return ethereum;
};

const getFirstAccount = (unknownAccounts: unknown) => {
  const accounts = unknownAccounts as string[];

  const account = accounts[0];

  if (account) {
    return getChecksumAddress(account);
  }

  throw "No accounts found!";
};

export const getAccount = async () => {
  const ethereum = getProvider();

  const accounts = await ethereum.request({ method: method.REQUEST_ACCOUNTS });

  return getFirstAccount(accounts);
};

export const startAccountListener = (
  onSuccess: (account: string) => void | Promise<void>,
  onFail: () => void | Promise<void>,
) => {
  const ethereum = getProvider();

  console.log(`Listening to event "${event.ACOUNTS_CHANGED}"...`);

  ethereum.on(event.ACOUNTS_CHANGED, (accounts) => {
    try {
      const account = getFirstAccount(accounts);

      console.log(`Change account successfully!`);

      void onSuccess(account);
    } catch (error) {
      console.log("ERROR - On accounts changed:", error);

      void onFail();
    }
  });
};

export const startChainListener = (onChange: () => unknown | Promise<unknown>) => {
  const ethereum = getProvider();

  console.log(`Listening to event "${event.CHAIN_CHANGED}"...`);

  ethereum.on(event.CHAIN_CHANGED, () => {
    console.log(`Change chain successfully!`);

    void onChange();
  });
};

export const getConnectedAccount = async () => {
  const ethereum = getProvider();

  const accounts = await ethereum.request({ method: "eth_accounts" });

  return getFirstAccount(accounts);
};

const getChainIdHex = (chainId: string | number) => {
  const chainIdInt = parseInt(chainId.toString(), 10);

  return `0x${chainIdInt.toString(16)}`;
};

export const switchChain = async (chainId: string | number) => {
  const provider = getProvider();

  const chainIdHex = getChainIdHex(chainId);

  await provider.request({ method: method.SWITCH_CHAIN, params: [{ chainId: chainIdHex }] });

  console.log(`Switch to chain with id "${chainId}" successfully!`);
};

export const addChain = async ({ chainId, chainName, rpcUrl, symbol, decimals }: IChain) => {
  const provider = getProvider();

  const chainIdHex = getChainIdHex(chainId);

  await provider.request({
    method: method.ADD_CHAIN,
    params: [
      {
        chainId: chainIdHex,
        chainName,
        nativeCurrency: { symbol, decimals: parseInt(decimals) },
        rpcUrls: [rpcUrl],
      },
    ],
  });

  console.log(`Add chain "${chainName}" successfully!`);
};

export const stopAllListeners = () => {
  const provider = getProvider();

  console.log(`Stop all listeners!`);

  provider.removeAllListeners();
};
