// @ts-nocheck

import type { Chain } from "wagmi";
// import { mainnet } from "wagmi/chains";
import { ChainId } from "./chainIds";
import { NETWORK_ICON } from "./networks";
// @ts-ignore
const scrollSepolia: Chain = {
  id: ChainId.SCROLL_SEPOLIA,
  name: "Scroll Sepolia",
  network: "scroll-sepolia",
  nativeCurrency: {
    decimals: 18,
    name: "Ethereum",
    symbol: "ETH",
  },
  rpcUrls: {
    public: {
      http: ["https://sepolia-rpc.scroll.io"],
    },
    default: {
      http: ["https://sepolia-rpc.scroll.io"],
    },
  },
  blockExplorers: {
    default: {
      name: "Scroll Sepolia Explorer",
      url: "https://sepolia.scrollscan.com/",
    },
  },

  testnet: true,
};


export const SUPPORTED_WAGMI_CHAINS: Chain[] = [
  scrollSepolia,
];
