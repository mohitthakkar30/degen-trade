import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { scrollSepolia, baseSepolia, arbitrumSepolia, polygonMumbai, mantleTestnet, polygonZkEvmTestnet, celoAlfajores } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

export const { chains, publicClient } = configureChains(
    [polygonMumbai, polygonZkEvmTestnet, mantleTestnet ,arbitrumSepolia, baseSepolia, scrollSepolia, celoAlfajores ],
    [publicProvider()]
);
const { connectors } = getDefaultWallets({
    appName: "My RainbowKit App",
    projectId: "YOUR_PROJECT_ID",
    chains,
});
export const wagmiConfig = createConfig({
    autoConnect: true,
    connectors,
    publicClient,
});
