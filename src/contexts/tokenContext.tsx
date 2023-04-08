import type { BigNumber, ContractTransaction } from "ethers";
import { createContext, useContext, useEffect, useMemo } from "react";
import { useToken } from "~/hooks/useToken";

interface ITokenContext {
  balance: number;
  getAllowance?: (spender: string) => Promise<BigNumber>;
  approve?: (spender: string) => Promise<ContractTransaction>;
  getBalance: () => Promise<void>;
}

export const TokenContext = createContext<ITokenContext>({
  balance: 0,
  getBalance: () => Promise.resolve(),
});

export const useTokenContext = () => useContext(TokenContext);

export const TokenProvider = ({ children }: { children: React.ReactNode }) => {
  const { balance, getAllowance, approve, getBalance, onTransfer } = useToken();

  useEffect(() => {
    void getBalance();
  }, [getBalance]);

  useEffect(() => {
    void onTransfer();
  }, [onTransfer]);

  const value = useMemo(
    () => ({
      balance,
      getAllowance,
      approve,
      getBalance,
    }),
    [approve, balance, getAllowance, getBalance],
  );

  return <TokenContext.Provider value={value}>{children}</TokenContext.Provider>;
};
