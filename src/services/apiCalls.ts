import api from './api';

type TvShow = {
	id: number;
	name: string;
	poster_path: string;
	backdrop_path: string;
};

type Movie = {
	id: number;
	title: string;
	name: string;
	poster_path: string;
	vote_average: number;
};

type getSeriesProps = {
	popularSeries?: TvShow[];
	series: TvShow[];
};

type getMoviesProps = {
	popularMovies?: Movie[];
	movies: Movie[];
};

export async function getSeries(): Promise<getSeriesProps> {
	const response = await api.get(
		'tv/on_the_air?api_key=484e4f3139aad3bd78ac1031740719a8&language=pt_BR&page=1'
	);

	const series = response.data.results;

	const popularSeries = response.data.results.filter(
		(_, index: number) => index <= 1
	);

	return {
		popularSeries,
		series,
	};
}

export async function getTrendingSeries(): Promise<getSeriesProps> {
	const response = await api.get(
		`trending/tv/week?api_key=484e4f3139aad3bd78ac1031740719a8&language=pt-br`
	);

	const series = response.data.results;

	return {
		series,
	};
}

export async function getMovies(): Promise<getMoviesProps> {
	const moviesResponse = await api.get(
		'https://api.themoviedb.org/3/movie/popular?api_key=484e4f3139aad3bd78ac1031740719a8&language=pt_BR&page=1'
	);

	const movies = moviesResponse.data.results;

	const popularMoviesResponse = await api.get(
		'https://api.themoviedb.org/3/movie/popular?api_key=484e4f3139aad3bd78ac1031740719a8&language=pt_BR&page=2'
	);

	const popularMovies = popularMoviesResponse.data.results.filter(
		(_, index: number) => index <= 1
	);

	return {
		movies,
		popularMovies,
	};
}
