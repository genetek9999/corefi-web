import { Token__factory } from "~/typechain-owned";

import { contracts } from "../constants";
import { getSigner } from "../libs/ethers";

export const getTokenContract = () => {
  const signer = getSigner();

  return Token__factory.connect(contracts.token, signer);
};
