import { BsDiscord, BsMedium, BsTelegram, BsTwitter, BsYoutube } from "react-icons/bs";
import { IconMenuDao, IconMenuLiquidity, IconMenuStaking, IconMenuSwap } from "~/assets/vectors";

import { links, paths } from "./links";

export const menuMainHeader = [
  {
    label: "Product",
    link: "",
    withIcon: true,
    menu: [
      {
        label: "CoreFi Swap",
        desc: "Defi product builders",
        icon: <IconMenuSwap />,
        link: paths.SWAP,
      },
      {
        label: "Staking",
        desc: "Stake and receive $COREFI",
        icon: <IconMenuStaking />,
        link: paths.STAKE,
      },
      {
        label: "Liquidity Vaults",
        desc: "Support COREFI as well as other exchanges by providing liquidity.",
        icon: <IconMenuLiquidity />,
        link: paths.LIQUIDITY_VAULTS,
      },
      // {
      //   label: "CoreDAO",
      //   desc: "A long-term DAO governance framework",
      //   icon: <IconMenuDao />,
      //   link: paths.DAO,
      // },
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
    label: "Presale",
    link: links.PRESALE,
    withIcon: false,
    menu: [],
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
    label: "Liquidity Vaults",
    link: paths.LIQUIDITY_VAULTS,
    withIcon: false,
    menu: [],
  },
  // {
  //   label: "DAO",
  //   link: paths.DAO,
  //   withIcon: false,
  //   menu: [],
  // },
];

export const menuMainFooter = [
  {
    category: "Platform",
    menu: [
      {
        label: "About Us",
        link: paths.ABOUT,
      },
      {
        label: "Whitepaper",
        link: links.WHITEPAPER,
      },
      // {
      //   label: "Campaign",
      //   link: links.PRESALE,
      // },
    ],
  },
  {
    category: "DApps",
    menu: [
      {
        label: "CoreSwap",
        link: paths.SWAP,
      },
      {
        label: "Core Staking",
        link: paths.STAKE,
      },
      {
        label: "Liquidity Vaults",
        link: paths.LIQUIDITY_VAULTS,
      },
      // {
      //   label: "CoreDAO",
      //   link: paths.DAO,
      // },
    ],
  },
  {
    category: "Legals",
    menu: [
      {
        label: "Legal Disclaimer",
        link: "https://docs.corefi.io/appendix/legal-disclaimer",
      },
    ],
  },
];

export const menuSocial = [
  // {
  //   icon: <BsYoutube />,
  //   link: links.YOUTUBE,
  // },
  {
    icon: <BsTwitter />,
    link: links.TWITTER,
  },
  {
    icon: <BsMedium />,
    link: links.MEDIUM,
  },
  {
    icon: <BsDiscord />,
    link: links.DISCORD,
  },
  {
    icon: <BsTelegram />,
    link: links.TELEGRAM_ANNOUNCEMENT,
  },
  {
    icon: <BsTelegram />,
    link: links.TELEGRAM_GLOBAL,
  },
];
