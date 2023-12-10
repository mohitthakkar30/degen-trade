import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { wagmiConfig, chains } from "@/configs/wagmi";
import { WagmiConfig } from "wagmi";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import {  ApolloProvider } from '@apollo/client';
import { apolloClient } from "@/utils/apollo/client";


export default function App({ Component, pageProps }: AppProps) {
    return (
        <> <ApolloProvider client={apolloClient}>
            <WagmiConfig config={wagmiConfig}>
                <RainbowKitProvider chains={chains}>
                    <Component {...pageProps} />
                </RainbowKitProvider>
            </WagmiConfig></ApolloProvider>
        </>
    );
}
