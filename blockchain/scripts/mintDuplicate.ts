import { deploy } from "./deploy";

(function () {
  const tokenName = "Jay Unique NFT";
  const tokenSymbol = "JUNFT";
  const baseTokenURI = "ipfs://QmPKRSBNCqF5bQQp7CaXyjpRsJHt1qzhi6znR6Nuj6oZSQ";
  const imageURI = "ipfs://QmaxFRTUo6sCEKYgRSyV8HQ71hagkV2RYX3frLLpvK7Xih";

  void deploy("MintDuplicate", tokenName, tokenSymbol, baseTokenURI, imageURI);
})();
