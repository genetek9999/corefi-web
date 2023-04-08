import { contracts } from "../constants";
import { getSigner } from "../libs/ethers";
import { Mint__factory } from "../typechain-owned";

export const getMintContract = () => {
  const signer = getSigner();

  return Mint__factory.connect(contracts.mint, signer);
};
