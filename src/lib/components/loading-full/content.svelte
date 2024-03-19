<script lang="ts">
	export let title = "";
	export let body = "";
</script>

<div class="w-screen h-screen flex justify-center items-center full-modal-cn">
	<div class="flex flex-col items-center space-y-4">
		<svg
			class="spinner"
			width="65px"
			height="65px"
			viewBox="0 0 66 66"
			xmlns="http://www.w3.org/2000/svg"
			><circle
				class="circle"
				fill="none"
				stroke-width="6"
				stroke-linecap="round"
				cx="33"
				cy="33"
				r="30"
			></circle></svg
		>

		{#if title}
			<h2 class="h2">{title}</h2>
		{/if}

		{#if body}
			<p>{body}</p>
		{/if}
	</div>
</div>

<style lang="scss">
	.spinner {
		-webkit-animation: rotation 1.35s linear infinite;
		animation: rotation 1.35s linear infinite;

		stroke: #fff;
	}

	@-webkit-keyframes rotation {
		0% {
			-webkit-transform: rotate(0deg);
			transform: rotate(0deg);
		}

		100% {
			-webkit-transform: rotate(270deg);
			transform: rotate(270deg);
		}
	}

	@keyframes rotation {
		0% {
			-webkit-transform: rotate(0deg);
			transform: rotate(0deg);
		}

		100% {
			-webkit-transform: rotate(270deg);
			transform: rotate(270deg);
		}
	}

	.circle {
		stroke-dasharray: 180;
		stroke-dashoffset: 0;
		-webkit-transform-origin: center;
		-ms-transform-origin: center;
		transform-origin: center;
		-webkit-animation: turn 1.35s ease-in-out infinite;
		animation: turn 1.35s ease-in-out infinite;
	}

	@-webkit-keyframes turn {
		0% {
			stroke-dashoffset: 180;
		}

		50% {
			stroke-dashoffset: 45;
			-webkit-transform: rotate(135deg);
			transform: rotate(135deg);
		}

		100% {
			stroke-dashoffset: 180;
			-webkit-transform: rotate(450deg);
			transform: rotate(450deg);
		}
	}

	@keyframes turn {
		0% {
			stroke-dashoffset: 180;
		}

		50% {
			stroke-dashoffset: 45;
			-webkit-transform: rotate(135deg);
			transform: rotate(135deg);
		}

		100% {
			stroke-dashoffset: 180;
			-webkit-transform: rotate(450deg);
			transform: rotate(450deg);
		}
	}

	.full-modal-cn {
		background: rgba(44, 54, 86, 0.7);
	}
</style>
