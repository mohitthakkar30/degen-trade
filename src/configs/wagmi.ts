import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { scrollSepolia, baseSepolia, arbitrumSepolia, polygonMumbai, mantleTestnet, polygonZkEvmTestnet, celoAlfajores, baseGoerli, arbitrumGoerli } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

export const { chains, publicClient } = configureChains(
    [baseGoerli, polygonZkEvmTestnet ,arbitrumGoerli , scrollSepolia ],
    [publicProvider()]
);
const { connectors } = getDefaultWallets({
    appName: "My RainbowKit App",
    projectId: "r1xrnkXFSD92Fd715SqGkluuVwQ_5-YK",
    chains,
});
export const wagmiConfig = createConfig({
    autoConnect: true,
    connectors,
    publicClient,
});
