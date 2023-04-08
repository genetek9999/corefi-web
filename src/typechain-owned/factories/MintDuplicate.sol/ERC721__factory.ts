/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type { ERC721, ERC721Interface } from "../../MintDuplicate.sol/ERC721";
import type { PromiseOrValue } from "../../common";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620015003803806200150083398101604081905262000034916200011f565b600062000042838262000218565b50600162000051828262000218565b505050620002e4565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200008257600080fd5b81516001600160401b03808211156200009f576200009f6200005a565b604051601f8301601f19908116603f01168101908282118183101715620000ca57620000ca6200005a565b81604052838152602092508683858801011115620000e757600080fd5b600091505b838210156200010b5785820183015181830184015290820190620000ec565b600093810190920192909252949350505050565b600080604083850312156200013357600080fd5b82516001600160401b03808211156200014b57600080fd5b620001598683870162000070565b935060208501519150808211156200017057600080fd5b506200017f8582860162000070565b9150509250929050565b600181811c908216806200019e57607f821691505b602082108103620001bf57634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200021357600081815260208120601f850160051c81016020861015620001ee5750805b601f850160051c820191505b818110156200020f57828155600101620001fa565b5050505b505050565b81516001600160401b038111156200023457620002346200005a565b6200024c8162000245845462000189565b84620001c5565b602080601f8311600181146200028457600084156200026b5750858301515b600019600386901b1c1916600185901b1785556200020f565b600085815260208120601f198616915b82811015620002b55788860151825594840194600190910190840162000294565b5085821015620002d45787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b61120c80620002f46000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c80636352211e1161008c578063a22cb46511610066578063a22cb465146101b3578063b88d4fde146101c6578063c87b56dd146101d9578063e985e9c5146101ec57600080fd5b80636352211e1461017757806370a082311461018a57806395d89b41146101ab57600080fd5b806301ffc9a7146100d457806306fdde03146100fc578063081812fc14610111578063095ea7b31461013c57806323b872dd1461015157806342842e0e14610164575b600080fd5b6100e76100e2366004610d30565b6101ff565b60405190151581526020015b60405180910390f35b610104610251565b6040516100f39190610d9d565b61012461011f366004610db0565b6102e3565b6040516001600160a01b0390911681526020016100f3565b61014f61014a366004610de5565b61037d565b005b61014f61015f366004610e0f565b610492565b61014f610172366004610e0f565b6104c3565b610124610185366004610db0565b6104de565b61019d610198366004610e4b565b610555565b6040519081526020016100f3565b6101046105dc565b61014f6101c1366004610e66565b6105eb565b61014f6101d4366004610eb8565b6106af565b6101046101e7366004610db0565b6106e7565b6100e76101fa366004610f94565b6107cf565b60006001600160e01b031982166380ac58cd60e01b148061023057506001600160e01b03198216635b5e139f60e01b145b8061024b57506301ffc9a760e01b6001600160e01b03198316145b92915050565b60606000805461026090610fc7565b80601f016020809104026020016040519081016040528092919081815260200182805461028c90610fc7565b80156102d95780601f106102ae576101008083540402835291602001916102d9565b820191906000526020600020905b8154815290600101906020018083116102bc57829003601f168201915b5050505050905090565b6000818152600260205260408120546001600160a01b03166103615760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b60648201526084015b60405180910390fd5b506000908152600460205260409020546001600160a01b031690565b6000610388826104de565b9050806001600160a01b0316836001600160a01b0316036103f55760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b6064820152608401610358565b336001600160a01b0382161480610411575061041181336107cf565b6104835760405162461bcd60e51b815260206004820152603860248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760448201527f6e6572206e6f7220617070726f76656420666f7220616c6c00000000000000006064820152608401610358565b61048d83836107fd565b505050565b61049c338261086b565b6104b85760405162461bcd60e51b815260040161035890611001565b61048d838383610942565b61048d838383604051806020016040528060008152506106af565b6000818152600260205260408120546001600160a01b03168061024b5760405162461bcd60e51b815260206004820152602960248201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460448201526832b73a103a37b5b2b760b91b6064820152608401610358565b60006001600160a01b0382166105c05760405162461bcd60e51b815260206004820152602a60248201527f4552433732313a2062616c616e636520717565727920666f7220746865207a65604482015269726f206164647265737360b01b6064820152608401610358565b506001600160a01b031660009081526003602052604090205490565b60606001805461026090610fc7565b336001600160a01b038316036106435760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c6572000000000000006044820152606401610358565b3360008181526005602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b6106b9338361086b565b6106d55760405162461bcd60e51b815260040161035890611001565b6106e184848484610ae2565b50505050565b6000818152600260205260409020546060906001600160a01b03166107665760405162461bcd60e51b815260206004820152602f60248201527f4552433732314d657461646174613a2055524920717565727920666f72206e6f60448201526e3732bc34b9ba32b73a103a37b5b2b760891b6064820152608401610358565b600061077d60408051602081019091526000815290565b9050600081511161079d57604051806020016040528060008152506107c8565b806107a784610b15565b6040516020016107b8929190611052565b6040516020818303038152906040525b9392505050565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b600081815260046020526040902080546001600160a01b0319166001600160a01b0384169081179091558190610832826104de565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000818152600260205260408120546001600160a01b03166108e45760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b6064820152608401610358565b60006108ef836104de565b9050806001600160a01b0316846001600160a01b0316148061092a5750836001600160a01b031661091f846102e3565b6001600160a01b0316145b8061093a575061093a81856107cf565b949350505050565b826001600160a01b0316610955826104de565b6001600160a01b0316146109bd5760405162461bcd60e51b815260206004820152602960248201527f4552433732313a207472616e73666572206f6620746f6b656e2074686174206960448201526839903737ba1037bbb760b91b6064820152608401610358565b6001600160a01b038216610a1f5760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b6064820152608401610358565b610a2a6000826107fd565b6001600160a01b0383166000908152600360205260408120805460019290610a53908490611097565b90915550506001600160a01b0382166000908152600360205260408120805460019290610a819084906110aa565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b610aed848484610942565b610af984848484610c16565b6106e15760405162461bcd60e51b8152600401610358906110bd565b606081600003610b3c5750506040805180820190915260018152600360fc1b602082015290565b8160005b8115610b665780610b508161110f565b9150610b5f9050600a8361113e565b9150610b40565b60008167ffffffffffffffff811115610b8157610b81610ea2565b6040519080825280601f01601f191660200182016040528015610bab576020820181803683370190505b5090505b841561093a57610bc0600183611097565b9150610bcd600a86611152565b610bd89060306110aa565b60f81b818381518110610bed57610bed611166565b60200101906001600160f81b031916908160001a905350610c0f600a8661113e565b9450610baf565b60006001600160a01b0384163b15610d0c57604051630a85bd0160e11b81526001600160a01b0385169063150b7a0290610c5a90339089908890889060040161117c565b6020604051808303816000875af1925050508015610c95575060408051601f3d908101601f19168201909252610c92918101906111b9565b60015b610cf2573d808015610cc3576040519150601f19603f3d011682016040523d82523d6000602084013e610cc8565b606091505b508051600003610cea5760405162461bcd60e51b8152600401610358906110bd565b805181602001fd5b6001600160e01b031916630a85bd0160e11b14905061093a565b506001949350505050565b6001600160e01b031981168114610d2d57600080fd5b50565b600060208284031215610d4257600080fd5b81356107c881610d17565b60005b83811015610d68578181015183820152602001610d50565b50506000910152565b60008151808452610d89816020860160208601610d4d565b601f01601f19169290920160200192915050565b6020815260006107c86020830184610d71565b600060208284031215610dc257600080fd5b5035919050565b80356001600160a01b0381168114610de057600080fd5b919050565b60008060408385031215610df857600080fd5b610e0183610dc9565b946020939093013593505050565b600080600060608486031215610e2457600080fd5b610e2d84610dc9565b9250610e3b60208501610dc9565b9150604084013590509250925092565b600060208284031215610e5d57600080fd5b6107c882610dc9565b60008060408385031215610e7957600080fd5b610e8283610dc9565b915060208301358015158114610e9757600080fd5b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b60008060008060808587031215610ece57600080fd5b610ed785610dc9565b9350610ee560208601610dc9565b925060408501359150606085013567ffffffffffffffff80821115610f0957600080fd5b818701915087601f830112610f1d57600080fd5b813581811115610f2f57610f2f610ea2565b604051601f8201601f19908116603f01168101908382118183101715610f5757610f57610ea2565b816040528281528a6020848701011115610f7057600080fd5b82602086016020830137600060208483010152809550505050505092959194509250565b60008060408385031215610fa757600080fd5b610fb083610dc9565b9150610fbe60208401610dc9565b90509250929050565b600181811c90821680610fdb57607f821691505b602082108103610ffb57634e487b7160e01b600052602260045260246000fd5b50919050565b60208082526031908201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f6040820152701ddb995c881b9bdc88185c1c1c9bdd9959607a1b606082015260800190565b60008351611064818460208801610d4d565b835190830190611078818360208801610d4d565b01949350505050565b634e487b7160e01b600052601160045260246000fd5b8181038181111561024b5761024b611081565b8082018082111561024b5761024b611081565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b60006001820161112157611121611081565b5060010190565b634e487b7160e01b600052601260045260246000fd5b60008261114d5761114d611128565b500490565b60008261116157611161611128565b500690565b634e487b7160e01b600052603260045260246000fd5b6001600160a01b03858116825284166020820152604081018390526080606082018190526000906111af90830184610d71565b9695505050505050565b6000602082840312156111cb57600080fd5b81516107c881610d1756fea26469706673582212200520e3965f698e56031ceeeefbefb61e270b0a1bb26960d14c6eaaeaed79bcfa64736f6c63430008110033";

type ERC721ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC721ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC721__factory extends ContractFactory {
  constructor(...args: ERC721ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    name_: PromiseOrValue<string>,
    symbol_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ERC721> {
    return super.deploy(name_, symbol_, overrides || {}) as Promise<ERC721>;
  }
  override getDeployTransaction(
    name_: PromiseOrValue<string>,
    symbol_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name_, symbol_, overrides || {});
  }
  override attach(address: string): ERC721 {
    return super.attach(address) as ERC721;
  }
  override connect(signer: Signer): ERC721__factory {
    return super.connect(signer) as ERC721__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC721Interface {
    return new utils.Interface(_abi) as ERC721Interface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): ERC721 {
    return new Contract(address, _abi, signerOrProvider) as ERC721;
  }
}
