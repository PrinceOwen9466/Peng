<script lang="ts">
	import { useWalletStore } from "$lib/stores/wallet";
	import { getToastStore } from "@skeletonlabs/skeleton";
	import { createWeb3Modal, defaultConfig } from "@web3modal/ethers";
	import { onMount, tick } from "svelte";

	// import { getToastStore } from "@skeletonlabs/skeleton";

	const wallet = useWalletStore();
	const { connected, address, network, projectId } = wallet;

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
			wallet.setProvider(ev.provider);
		});
	});

	function connect() {
		modal.open();
	}

	async function copyAddress() {
		// navigator.clipboard.writeText($address).then(() => {
		// 	const toast = getToastStore();
		// 	toast.trigger({
		// 		message: "Copied to clipboard",
		// 		timeout: 3000
		// 	});
		// });

		toast.trigger({
			message: "Copied to clipboard",
			timeout: 3000
		});
	}

	function disconnect() {
		modal.open();
	}
</script>

<div class="home-root h-full w-full flex">
	<div class="connect-panel">
		{#if $connected}
			<div class="wallet-panel flex">
				<input type="text" class="input" value={$address} on:click={copyAddress} />
				<button type="button" class="btn-icon bg-initial" on:click={disconnect}>
					<i class="bx bx-unlink text-red-500 text-xl"></i>
				</button>
			</div>
		{:else}
			<button class="connect-btn" on:click={connect}> Connect Wallet </button>
		{/if}
	</div>

	<div class="m-auto text-center flex flex-col items-center">
		<figure>
			<section class="img-bg"></section>
			<img src="/hd.png" alt="" class="peng-logo" />
		</figure>
		<div class="flex justify-start peng-panel">
			<input class="input mr-8" placeholder="Amount" type="number" />

			<button class="peng-btn" />
		</div>
	</div>
</div>

<style lang="scss">
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

			font-family: "Saira Condensed", sans-serif;
			font-weight: 400;
			font-style: normal;
		}

		button {
			background: url("/mint-btn.png") no-repeat;
			background-size: contain;
			width: 160px;

			&:hover {
				background: url("/mint-btn-hover.png") no-repeat;
				background-size: contain;
			}

			margin-left: auto;
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
		height: 50px;

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
</style>
