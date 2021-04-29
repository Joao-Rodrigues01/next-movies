import axios from 'axios';

export const tmdbApi = axios.create({
	baseURL: 'https://api.themoviedb.org/3/',
});

export const animeApi = axios.create({
	baseURL: 'https://api.jikan.moe/v3',
});
