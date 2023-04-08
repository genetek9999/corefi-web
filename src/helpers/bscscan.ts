import axios from "axios";

export type PropsTransaction = {
  blockHash: string;
  blockNumber: string;
  confirmations: string;
  contractAddress: string;
  cumulativeGasUsed: string;
  from: string;
  functionName: string;
  gas: string;
  gasPrice: string;
  gasUsed: string;
  hash: string;
  input: string;
  isError: string;
  methodId: string;
  nonce: string;
  timeStamp: string;
  to: string;
  transactionIndex: string;
  txreceipt_status: string;
  value: string;
};

export type PropsTransactionData = {
  status: string;
  message: string;
  result: PropsTransaction[];
};

export const getAllTransactions = async (address: string) => {
  const api = `https://api.bscscan.com/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&sort=asc&apikey=QJ8XU1PQFA86WNKRYJSFQBGXUDDJZ3G4GE`;

  const res = await axios.get<PropsTransactionData>(api);

  return res.data.result;
};
