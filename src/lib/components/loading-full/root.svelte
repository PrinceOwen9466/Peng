<script lang="ts">
	import { getModalStore, type ModalSettings } from "@skeletonlabs/skeleton";
	import ContentComponent from "./content.svelte";

	const modalStore = getModalStore();

	export let title = "";
	export let body = "";
	export let isOpen = false;

	$: {
		if (isOpen) {
			modalStore.trigger({
				type: "component",
				component: {
					ref: ContentComponent,
					props: {
						title,
						body
					}
				}
			});
		} else {
			modalStore.close();
		}
	}
</script>
