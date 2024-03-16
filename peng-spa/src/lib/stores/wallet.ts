import { ABI_POLY_PENG } from "$lib/models/abis";
import { BrowserProvider, Contract, type Eip1193Provider } from "ethers";
import { writable } from "svelte/store";

interface ChainNetwork {
	rpcUrl: string;
	currency: string;
	name: string;
	chainId: number;
	explorerUrl: string;
  currencyDecimals: number;
}

const POLY_PENG_ADDRESS = "0xB1a58fae5C0E952F64f9433789a350b8ab54D6D0";

const MAIN_NETWORK: ChainNetwork = {
	name: "Polygon Mainnet",
	chainId: 137,
	currency: "MATIC",
	rpcUrl: "https://polygon-rpc.com",
	explorerUrl: "https://polygonscan.com",
  currencyDecimals: 18
};

const initialState = () => ({
  connected: writable(true)
});


let _walletStore: ReturnType<typeof initialState> & typeof actions;
const _network = MAIN_NETWORK;

export const useWalletStore = () => {
  if (!_walletStore) {
    _walletStore = {
      ...initialState(),
      ...actions
    };
  }

  return _walletStore;
};

let _provider: BrowserProvider;
const _polyPeng = new Contract(
	POLY_PENG_ADDRESS,
	ABI_POLY_PENG
);



async function addNetwork() {
	try {
    const net = _network;
    await _provider.send("wallet_addEthereumChain", [
      {
        chainId: `0x${net.chainId.toString(16)}`,
        rpcUrls: [net.rpcUrl],
        chainName: net.name,
        nativeCurrency: {
          name: net.currency,
          symbol: net.currency,
          decimals: net.currencyDecimals,
        },
        blockExplorerUrls: [net.explorerUrl],
      },
    ]);
  } catch (err) {
    console.error("Failed to add network", err);
  }
}

const actions = {
  async setProvider(prov: Eip1193Provider) {
    if (_provider) {
      _provider.destroy();
    }
    
    _provider = new BrowserProvider(prov);
    addNetwork();
  },
  mint(amount: number) {
    console.log("Will now mint", amount)
  }
}