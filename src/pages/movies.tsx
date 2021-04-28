import { GetServerSideProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import PlusButton from '../components/PlusButton';
import SideContent from '../components/SideContent';
import Slider from '../components/Slider';
import WatchButton from '../components/WatchButton';
import api from '../services/api';

import { HomeSection, MainBanner, NavHeader } from '../styles/movies';

const Movies = ({ movies, popularSeries, popularMovies }) => {
	const imageBaseHighResolutionURL =
		'https://image.tmdb.org/t/p/t/p/w1920_and_h800_multi_faces';
	return (
		<main>
			<HomeSection>
				<NavHeader>
					<Link href="/movies">
						<a className="active">Movie</a>
					</Link>

					<Link href="/">
						<a>TV Show</a>
					</Link>

					<Link href="#">
						<a>Anime</a>
					</Link>
				</NavHeader>

				<MainBanner>
					<Image
						src={`${imageBaseHighResolutionURL}${popularMovies[0].backdrop_path}`}
						alt="imagem do filme em destaque"
						width={1920}
						height={1080}
						objectFit="cover"
					/>

					<div id="serie-info">
						<p>Now Streaming</p>
						<h1>{popularMovies[0].title}</h1>

						<span>ACTION, FANTASY, COMEDY</span>
					</div>

					<div id="buttons">
						<WatchButton />
						<PlusButton />
					</div>
				</MainBanner>

				<Slider series={movies} />
			</HomeSection>

			<SideContent popularMovies={popularSeries} />
		</main>
	);
};

export default Movies;

export const getServerSideProps: GetServerSideProps = async () => {
	const seriesResponse = await api.get(
		'tv/on_the_air?api_key=484e4f3139aad3bd78ac1031740719a8&language=pt_BR&page=1'
	);
	const popularSeries = seriesResponse.data.results.filter(
		(_, index: number) => index <= 1
	);

	const moviesResponse = await api.get(
		'https://api.themoviedb.org/3/movie/popular?api_key=484e4f3139aad3bd78ac1031740719a8&language=pt_BR&page=1'
	);

	const movies = moviesResponse.data.results;

	const popularMoviesResponse = await api.get(
		'https://api.themoviedb.org/3/movie/popular?api_key=484e4f3139aad3bd78ac1031740719a8&language=pt_BR&page=2'
	);

	const popularMovies = popularMoviesResponse.data.results;

	return {
		props: {
			movies,
			popularSeries,
			popularMovies,
		},
	};
};
