<script>
	import logo from "$lib/assets/logo.png";
	/** @type {import('./$types').PageData} */
	// export let data;
</script>

<header>
	<a href="/settings">settings</a>
	<img src="{logo}" alt="logo"/>
	<a href="/settings">resources</a>
</header>
<main></main>


<style lang="scss">
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 1rem;
		background: $accent;
	}
	a {
		color: white;
	}
	img {
		width: 100px;
	}
</style>