import { IconMenuDao, IconMenuLiquidity, IconMenuStaking, IconMenuSwap } from "~/assets/vectors";

import { links, paths } from "./links";

export const menuMainHeader = [
  {
    label: "Product",
    link: "",
    withIcon: true,
    menu: [
      {
        label: "CoreSwap",
        desc: "Defi product builders",
        icon: <IconMenuSwap />,
        link: paths.SWAP,
      },
      {
        label: "Staking",
        desc: "Investing in Web3 builders",
        icon: <IconMenuStaking />,
        link: paths.STAKE,
      },
      {
        label: "Liquidity Provider",
        desc: "Investing in Web3 builders",
        icon: <IconMenuLiquidity />,
        link: paths.LIQUIDITY_VAULTS,
      },
      {
        label: "CoreDAO",
        desc: "Investing in Web3 builders",
        icon: <IconMenuDao />,
        link: paths.DAO,
      },
    ],
  },
  {
    label: "About us",
    link: paths.ABOUT,
    withIcon: false,
    menu: [],
  },
  {
    label: "Docs",
    withIcon: false,
    link: "",
    menu: [
      {
        label: "Whitepaper",
        link: links.WHITEPAPER,
        desc: "",
        icon: <></>,
      },
      {
        label: "KYC",
        link: links.KYC,
        desc: "",
        icon: <></>,
      },
      {
        label: "Audit",
        link: links.AUDIT,
        desc: "",
        icon: <></>,
      },
      {
        label: "SAFU",
        link: links.SAFU,
        desc: "",
        icon: <></>,
      },
    ],
  },
  {
    label: "Blog",
    link: links.BLOG,
    withIcon: false,
    menu: [],
  },
  {
    label: "Campaign",
    link: links.CAMPAIGN,
    withIcon: false,
    menu: [],
  },
];

export const menuMainFooter = [
  {
    label: "",
    link: "",
  },
];

export const menuFeatureHeader = [
  {
    label: "Swap",
    link: paths.SWAP,
    withIcon: false,
    menu: [],
  },
  {
    label: "Stake",
    link: paths.STAKE,
    withIcon: false,
    menu: [],
  },
  {
    label: "Liquidity provider",
    link: paths.LIQUIDITY_VAULTS,
    withIcon: false,
    menu: [],
  },
  {
    label: "DAO",
    link: paths.DAO,
    withIcon: false,
    menu: [],
  },
];
