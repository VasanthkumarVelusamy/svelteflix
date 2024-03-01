export const base = 'https://api.movies.tastejs.com';
export const media_base = 'https://image.tmdb.org/t/p';

export async function get(fetch, endpoint, params) {
    const q = new URLSearchParams(params);
    const response = await fetch(`${base}/${endpoint}?${q}`);

    return await response.json()
}

export function media(filepath, width) {
    return `${media_base}/w${width}${filepath}`;
}