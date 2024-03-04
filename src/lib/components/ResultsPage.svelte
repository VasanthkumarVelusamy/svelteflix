<script>
	import { media } from '$lib/api';
	export let movies;
	export let next;
</script>

<div class="result">
	{#each movies as movie}
		<a href="movies/{movie.id}">
			<img alt={movie.title} src={media(movie.poster_path, 500)} />
		</a>
	{/each}
</div>

<style>
	.result {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		width: 100%;
	}

	a {
		width: 100%;
		height: auto;
		aspect-ratio: 2/3;
		padding: 0.5rem;
	}

	img {
		width: 100%;
	}
</style>
