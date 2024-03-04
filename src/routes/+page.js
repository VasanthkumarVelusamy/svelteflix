import * as api from '$lib/api'

export async function load({fetch}) {
    const [ trending, now_playing, upcoming] = await Promise.all([
        api.get(fetch, 'trending/movie/day'),
        api.get(fetch, 'movie/now_playing'),
        api.get(fetch, 'movie/upcoming')
    ])
    
    const featured = await api.get(fetch, `movie/${trending.results[0].id}`, {append_to_response: 'images'});
    return {
        trending,
        now_playing,
        upcoming,
        featured
    };
}