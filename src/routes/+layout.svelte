<script>
	import logo from "$lib/assets/logo.png";
	import "$lib/style/app.scss";
</script>
<header>
	<a href="/settings">settings</a>
	<img src="{logo}" alt="logo"/>
	<a href="/resources">resources</a>
</header>
<slot></slot>

<style lang="scss">
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 1rem;
		background: $accent;
		min-height: 4.25rem;
		// box-shadow: 0 0 15px rgba(0, 0, 0, 0.7);
		position: relative;
		text-transform: uppercase;
		font-size: 0.85rem;
		font-weight: bold;
		letter-spacing: 0.1rem;
		&::after {
			 content: "";
			 display: block;
			 position: absolute;
			 bottom: 4px;
			 left: 0;
			 height: 1px;
			 width: 100%;
			 background: white;
		}
	}

	a {
		color: white;
	}

	img {
		width: 100px;
		padding-bottom: 1rem;
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		top: 0;
	}

</style>