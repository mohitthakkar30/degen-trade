import { ChainId } from "./chainIds";

export const contracts = {
  compFactory: {
    [ChainId.SCROLL_SEPOLIA]: "0xD976A8642205Ab858d53AF8fA7d72016c22b266c",
    [ChainId.BASE_GOERLI]: "0x333520684825170596C4E6755e51B0094c0A9948",
    [ChainId.ARBITRUM_GOERLI]: "0xF8c851446Bba8AD2F980166A01EC7693DE88f09e",
    [ChainId.ZKEVM_GOERLI]: "0xF8c851446Bba8AD2F980166A01EC7693DE88f09e",
  },
};
