<script>
	import { media } from '$lib/api';
	// import { views } from '$lib/views';
	export let movies;
	export let view;
	export let href;
</script>

<h2 class="column">
	{view.title}
	{#if href}<a {href}>see all</a>{/if}
</h2>

<div class="carousel">
	{#each movies as movie}
		<a href="/movie/{movie.id}">
			<img alt={movie.title} src={media(movie.poster_path, 500)} />
		</a>
	{/each}
</div>

<style>
	.carousel {
		--padding: max(var(--side), calc(var(--side) + (100vw-var(--column)) / 2));
		display: flex;
		height: 10rem;
		gap: 1rem;
		overflow-x: scroll;
		scroll-snap-type: mandatory;
		scroll-padding-left: var(--padding);
		padding: 0 var(--padding);
	}

	.carousel::-webkit-scrollbar {
		display: none;
	}

	a {
		height: 100%;
	}

	img {
		height: 100%;
	}
</style>
