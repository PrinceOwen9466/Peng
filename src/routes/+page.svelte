<!-- YOU CAN DELETE EVERYTHING IN THIS PAGE -->

<div class="home-root h-full w-full flex">
	<button class="connect-btn" />

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

			font-family: "Antonio", sans-serif;
			font-optical-sizing: auto;
			font-weight: 500;
			font-style: normal;
		}

		button {
			background: url("/mint-btn.png") no-repeat;
			background-size: contain;
			min-width: 160px;

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

	.connect-btn {
		background: url("/connect-btn.png") no-repeat;
		background-size: contain;
		position: absolute;
		right: 30px;
		top: 30px;

		min-width: 200px;
		min-height: 50px;

		&:hover {
			background: url("/connect-btn-hover.png") no-repeat;
			background-size: contain;
		}
	}
</style>
