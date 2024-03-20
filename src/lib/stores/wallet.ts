import type { PolyPeng } from "$lib/models/PolyPeng";
import { ABI_POLY_PENG } from "$lib/models/abis";
import type { JsonRpcError, Signer } from "ethers";
import { BrowserProvider, Contract, type Eip1193Provider } from "ethers";
import { readable, writable, type Writable } from "svelte/store";
import { asReadable, type PickStoreValues, type ReadableCluster, type WritableCluster } from "../../util";
import type { JsonRpcPayload } from "ethers";

interface ChainNetwork {
	rpcUrl: string;
	currency: string;
	name: string;
	chainId: number;
	explorerUrl: string;
	currencyDecimals: number;
}

const isDev = false;

const AVAX_PENG_ADDRESS = "0x8e7f5afb7af6ce1fe690ab3dee8783d92d706a55";
const POLY_PENG_ADDRESS = "0xB1a58fae5C0E952F64f9433789a350b8ab54D6D0";

const TESTNET_NETWORK: ChainNetwork = {
	name: "Avalanche Fuji Testnet",
	chainId: 43113,
	currency: "AVAX",
	rpcUrl: "https://ava-testnet.public.blastapi.io/ext/bc/C/rpc",
	explorerUrl: "https://subnets-test.avax.network/c-chain",
	currencyDecimals: 18
}

const MAIN_NETWORK: ChainNetwork = {
	name: "Polygon Mainnet",
	chainId: 137,
	currency: "MATIC",
	rpcUrl: "https://polygon-rpc.com",
	explorerUrl: "https://polygonscan.com",
	currencyDecimals: 18
};


let pengAddress: string;
let network: ChainNetwork;


if (isDev) {
	pengAddress = AVAX_PENG_ADDRESS;
	network = TESTNET_NETWORK;
} else {
	pengAddress = POLY_PENG_ADDRESS;
	network = MAIN_NETWORK;
}



const initialState = () => ({
	connected: writable(false),
	address: writable(""),
});


const staticState = {
	network,
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

let _peng = new Contract(pengAddress, ABI_POLY_PENG) as unknown as PolyPeng;

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
	async setProvider(prov: Eip1193Provider|undefined, chainId: number|undefined) {
		if (!prov) {
			_this.connected.set(false);
			if (_provider) {
				_provider.destroy();
			}
			return;
		}

		_provider = new BrowserProvider(prov);

		if (chainId != network.chainId) {
			_store.addNetwork();
		}
		

		_signer = await _provider.getSigner();
		const addr = await _signer.getAddress();

		_peng = _peng.connect(_signer);
		
		_this.connected.set(true);
		_this.address.set(addr);
	},
	async mint(amount: number) {
		let addr = "";
		let connected = false;

		_this.address.subscribe(x => addr = x)();
		_this.connected.subscribe(x => connected = x)();

		if (!connected) {
			return false;
		}
		
		try {
			const cost = await _peng.cost();
			const payableAmount = BigInt(amount) * cost;
			
			await _peng.mint(addr, amount, {
				value: payableAmount
			});
		} catch (err) {
			return err;
		}
	}
};
