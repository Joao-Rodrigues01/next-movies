import React from 'react';
import Image from 'next/image';
import { GetServerSideProps } from 'next';

import Link from 'next/link';
import { HomeSection, NavHeader, MainBanner } from '../styles/home';
import WatchButton from '../components/WatchButton';
import PlusButton from '../components/PlusButton';
import SideContent from '../components/SideContent';
import api from '../services/api';
import Slider from '../components/Slider';

type TvShow = {
	id: number;
	name: string;
	poster_path: string;
	backdrop_path: string;
};

type Movie = {
	id: number;
	title: string;
	poster_path: string;
	vote_average: number;
};

type HomeProps = {
	series: TvShow[];
	popularSeries: TvShow[];
	popularMovies: Movie[];
};

const Home = ({ series, popularSeries, popularMovies }: HomeProps) => {
	const imageBaseHighResolutionURL =
		'https://image.tmdb.org/t/p/t/p/w1920_and_h800_multi_faces';

	return (
		<main>
			<HomeSection>
				<NavHeader>
					<Link href="/movies">
						<a>Movie</a>
					</Link>

					<Link href="/">
						<a className="active">TV Show</a>
					</Link>

					<Link href="#">
						<a>Anime</a>
					</Link>
				</NavHeader>

				<MainBanner>
					<Image
						src={`${imageBaseHighResolutionURL}${popularSeries[1].backdrop_path}`}
						alt="imagem do filme em destaque"
						width={1920}
						height={1080}
						objectFit="cover"
					/>

					<div id="serie-info">
						<p>SEASON 1</p>
						<h1>{popularSeries[1].name}</h1>

						<span>ACTION, FANTASY, COMEDY</span>
					</div>

					<div id="buttons">
						<WatchButton />
						<PlusButton />
					</div>
				</MainBanner>

				<Slider series={series} />
			</HomeSection>

			<SideContent popularMovies={popularMovies} />
		</main>
	);
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
	const { data } = await api.get(
		`trending/tv/week?api_key=484e4f3139aad3bd78ac1031740719a8&language=pt-br`
	);

	const series = data.results;

	const response = await api.get(
		'tv/on_the_air?api_key=484e4f3139aad3bd78ac1031740719a8&language=pt_BR&page=1'
	);
	const popularSeries = response.data.results;

	const movies = await api.get(
		'https://api.themoviedb.org/3/movie/popular?api_key=484e4f3139aad3bd78ac1031740719a8&language=pt_BR&page=1'
	);

	const popularMovies = movies.data.results.filter(
		(_, index: number) => index <= 1
	);

	return {
		props: {
			series,
			popularSeries,
			popularMovies,
		},
	};
};
