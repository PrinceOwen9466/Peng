<script lang="ts">
	import "../app.postcss";
	import { onMount } from "svelte";
	import { AppShell, AppBar, Toast, Modal, initializeStores } from "@skeletonlabs/skeleton";

	export const prerender = true;
	initializeStores();
	// Floating UI for Popups
	// import { computePosition, autoUpdate, flip, shift, offset, arrow } from "@floating-ui/dom";
	// import { storePopup } from "@skeletonlabs/skeleton";

	// storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
	import { computePosition, autoUpdate, offset, shift, flip, arrow } from "@floating-ui/dom";
	import { storePopup } from "@skeletonlabs/skeleton";
	storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });
</script>

<!-- App Shell -->
<AppShell>
	<!-- <AppShell>...</AppShell> -->
	<!-- <svelte:fragment slot="header">
		!-- App Bar --
		<AppBar>
			<svelte:fragment slot="lead">
				<strong class="text-xl uppercase">Skeleton</strong>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<a
					class="btn btn-sm variant-ghost-surface"
					href="https://discord.gg/EXqV7W8MtY"
					target="_blank"
					rel="noreferrer"
				>
					Discord
				</a>
				<a
					class="btn btn-sm variant-ghost-surface"
					href="https://twitter.com/SkeletonUI"
					target="_blank"
					rel="noreferrer"
				>
					Twitter
				</a>
				<a
					class="btn btn-sm variant-ghost-surface"
					href="https://github.com/skeletonlabs/skeleton"
					target="_blank"
					rel="noreferrer"
				>
					GitHub
				</a>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment> -->
	<!-- Page Route Content -->
	<Toast />
	<Modal />
	<slot />
</AppShell>
