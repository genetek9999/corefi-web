import { contracts } from "../constants";
import { getSigner } from "../libs/ethers";
import { MintDuplicate__factory } from "../typechain-owned";

export const getMintDuplicateContract = () => {
  const signer = getSigner();

  return MintDuplicate__factory.connect(contracts.mintduplicate, signer);
};
