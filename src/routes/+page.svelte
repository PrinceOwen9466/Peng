<script lang="ts">
	import { useWalletStore } from "$lib/stores/wallet";
	import { getToastStore, type PopupSettings } from "@skeletonlabs/skeleton";
	import { createWeb3Modal, defaultConfig } from "@web3modal/ethers";

	import { onMount } from "svelte";
	import LoadingFull from "$lib/components/loading-full";
	import { type TransactionReceipt } from "ethers";
	import type { RpcError } from "$lib/models/misc";
	import { popup } from "@skeletonlabs/skeleton";

	// import { getToastStore } from "@skeletonlabs/skeleton";

	const wallet = useWalletStore();
	const { connected, address, network, projectId } = wallet;
	let mintAmount = 0;
	let busy = false;

	const gpopup: PopupSettings = {
		event: "hover",
		target: "gpopup",
		placement: "bottom"
	};

	const tpopup: PopupSettings = {
		...gpopup,
		target: "tpopup"
	};

	const xpopup: PopupSettings = {
		...gpopup,
		target: "xpopup"
	};

	const config = defaultConfig({
		metadata: {
			name: "PolyPeng",
			description: "",
			url: "",
			icons: []
		}
	});

	let modal: ReturnType<typeof createWeb3Modal>;
	const toast = getToastStore();

	onMount(() => {
		modal = createWeb3Modal({
			ethersConfig: config,
			chains: [network],
			projectId: projectId
		});

		modal.subscribeProvider((ev) => {
			wallet.setProvider(ev.provider, modal.getChainId());
		});
	});

	function connect() {
		modal.open();
	}

	async function copyAddress() {
		navigator.clipboard.writeText($address).then(() => {
			toast.trigger({
				message: "Copied to clipboard",
				timeout: 3000
			});
		});
	}

	function disconnect() {
		modal.open();
	}

	function mint() {
		if (busy) {
			return;
		}

		busy = true;
		wallet
			.mint(mintAmount)
			.then((err) => {
				if (err == false) {
					toast.trigger({
						background: "bg-red-500",
						message: "Minting failed. Is your wallet connected?"
					});
				} else if (!err) {
					toast.trigger({
						message: `Successfully minted ${mintAmount} pengs`
					});
				} else {
					const rpcError = err as RpcError;

					const message = rpcError?.info?.error?.data.message ?? "";

					console.log(JSON.stringify(err));
					// console.log(rpcError.data);

					if (message && message != "") {
						toast.trigger({
							background: "bg-red-500",
							message: message
						});
					} else {
						toast.trigger({
							background: "bg-red-500",
							message: "An unexpected error occured. Please try again"
						});
					}
				}
			})
			.finally(() => (busy = false));
	}
</script>

<div class="home-root h-full w-full flex relative">
	<div class="connect-panel flex">
		{#if $connected}
			<div class="wallet-panel flex">
				<input type="text" class="input" value={$address} on:click={copyAddress} />
				<button type="button" class="btn-icon bg-initial" on:click={disconnect}>
					<i class="bx bx-unlink text-red-500 text-xl"></i>
				</button>
			</div>
		{:else}
			<button class="connect-btn ml-auto" on:click={connect}> Connect Wallet </button>
		{/if}
	</div>

	<div class="m-auto text-center flex flex-col items-center">
		<figure>
			<section class="img-bg"></section>
			<img src="/hd.png" alt="" class="peng-logo" />
		</figure>
		<form on:submit={mint} class="flex justify-start peng-panel">
			<input
				class="input mr-8 mint-input"
				placeholder="Amount"
				type="number"
				min="1"
				bind:value={mintAmount}
			/>

			<button class="btn peng-btn"> Mint </button>
		</form>

		<div>
			<div class="card p-2" data-popup="gpopup" style="background-color: #282862;">
				<p>Github</p>
			</div>

			<div class="card p-2" data-popup="tpopup" style="background-color: #282862;">
				<p>Telegram</p>
			</div>

			<div class="card p-2" data-popup="xpopup" style="background-color: #282862;">
				<p>X</p>
			</div>
		</div>

		<div class="social-panel">
			<a
				class="btn-icon btn btn-xl bg-initial"
				href="https://github.com/PrinceOwen9466/Peng"
				target="_blank"
				rel="noreferrer"
				use:popup={gpopup}
			>
				<i class="bx bxl-github"></i>
			</a>

			<a
				class="btn-icon btn btn-xl bg-initial"
				href="https://t.me/Dexhune/1"
				target="_blank"
				rel="noreferrer"
				use:popup={tpopup}
			>
				<i class="bx bxl-telegram" style="color:#ffffff"></i>
			</a>

			<a
				class="btn-icon btn btn-xl bg-initial"
				href="https://x.com/dexhune"
				target="_blank"
				rel="noreferrer"
				use:popup={xpopup}
			>
				<i class="bx bxl-twitter"></i>
			</a>
		</div>
	</div>

	<LoadingFull isOpen={busy} title="Minting" body="Just a moment..." />
</div>

<style lang="scss">
	@import "../../static/css/@include-media.scss";

	.peng-panel {
		background-image: url("/peng-texture.png");
		background-repeat: repeat;
		background-size: auto;
		width: 640px;
		border-radius: 25px;
		border-color: #12122c;
		border-width: 3px;
		padding: 10px 30px;

		input {
			background: #bbbcdb;
			color: #000;
			border-radius: 0;
			border-width: 0;
			font-size: 20px;
		}

		.peng-btn {
			background: #282862;
			border: #49498d 4px solid;
			color: #d9d9d9;

			width: 160px;
			position: relative;
			font-size: 22px;
			display: flex;
			border-radius: 0;

			&:hover {
				&::before {
					content: "";
					display: block;
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
					background-color: rgba(255, 255, 255, 0.1);
				}
			}

			// margin-left: auto;
		}
	}

	.peng-logo {
		width: 800px;
		height: auto;
	}

	.home-root {
		background-image: url("/bg.jpg");
		background-repeat: no-repeat;
		background-size: cover;
		background-position: 0;

		position: relative;
	}

	.connect-panel {
		right: 30px;
		top: 30px;
		position: absolute;

		font-family: "Saira Condensed", sans-serif;
		font-size: 25px;
		font-weight: 400;
		font-style: normal;
		color: #fff;
	}

	.wallet-panel {
		width: 400px;
		// height: 50px;

		background-color: #12122c;
		border-radius: 20px;

		input {
			background: transparent;
			border-width: 0;

			outline: 0 none;
			outline-offset: 0;
			border-radius: 0;
			margin: 0;
		}
	}

	.connect-btn {
		// background: url("/connect-btn.png") no-repeat;
		background-image: url("/peng-texture.png");
		background-repeat: repeat;
		background-size: auto;
		border-radius: 20px;
		// background-size: contain;
		// position: absolute;

		min-width: 200px;
		min-height: 50px;

		&:hover {
			&::before {
				content: "";
				display: block;
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				border-radius: 20px;
				background-color: rgba(255, 255, 255, 0.05);
			}
		}
	}

	.social-panel {
		position: absolute;
		left: 30px;
		top: 30px;
		background-color: #282862;
		border-radius: 10px;
		padding: 5px 0;

		a {
			border-radius: 4px;
			margin-left: 10px;
			font-size: 25px;
		}

		a:last-child {
			margin-right: 10px;
		}

		// 		*:not(:last-child) {
		//     display: block;
		//     margin-bottom: 30px;
		// }
	}

	@include media("<tablet") {
		.peng-panel {
			width: 80%;
		}

		.connect-panel {
			width: 80%;
			right: 10px;
			top: 10px;

			// margin-left: auto;
			// margin-right: auto;
		}

		.connect-btn {
			min-width: 150px;
			min-height: 40px;
			font-size: 22px;
			border-radius: 17px;
		}

		.wallet-panel {
			width: 100%;
		}

		.social-panel {
			right: 10px;
			top: 70px;
			left: unset;

			a {
				font-size: 20px;
				margin-left: 6px;
			}

			a:last-child {
				margin-right: 6px;
			}
		}
	}
</style>
