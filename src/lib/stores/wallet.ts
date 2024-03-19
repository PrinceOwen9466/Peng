import type { PolyPeng } from "$lib/models/PolyPeng";
import { ABI_POLY_PENG } from "$lib/models/abis";
import type { Signer } from "ethers";
import { BrowserProvider, Contract, type Eip1193Provider } from "ethers";
import { readable, writable, type Writable } from "svelte/store";
import { asReadable, type PickStoreValues, type ReadableCluster, type WritableCluster } from "../../util";

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
	connected: writable(false),
	address: writable(""),
});


const staticState = {
	network: MAIN_NETWORK,
	projectId: import.meta.env.VITE_APP_PROJECT_ID as string,
}

type WalletStore = ReturnType<typeof initialState>;
type ReadableStore = ReturnType<typeof asReadable<PickStoreValues<WalletStore>>>;

let _this: WalletStore;
let _store: ReadableStore & typeof actions & typeof staticState;


const _network = staticState.network;

export const useWalletStore = () => {
	if (!_this) {
		_this = initialState()

		_store = {
			...asReadable(_this),
			...actions,
			...staticState
		}
	}

	return _store;
};

let _provider: BrowserProvider;
let _signer: Signer;

const _polyPeng = new Contract(POLY_PENG_ADDRESS, ABI_POLY_PENG) as unknown as PolyPeng;

const actions = {
	async addNetwork() {
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
						decimals: net.currencyDecimals
					},
					blockExplorerUrls: [net.explorerUrl]
				}
			]);
		} catch (err) {
			console.error("Failed to add network", err);
		}
	},
	async setProvider(prov: Eip1193Provider|undefined) {
		if (_provider) {
			_provider.destroy();
		}

		if (!prov) {
			_this.connected.set(false);
			return;
		}

		_provider = new BrowserProvider(prov);
		_store.addNetwork();

		_signer = await _provider.getSigner();
		const addr = await _signer.getAddress();
		
		_this.connected.set(true);
		_this.address.set(addr);
	},
	async mint(amount: number) {
		const cost = await _polyPeng.cost();
		console.log("Will now mint", amount, cost);
		// await _polyPeng.mint()
	}
};
