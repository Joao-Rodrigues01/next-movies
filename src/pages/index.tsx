import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { GetServerSideProps } from 'next';

import WatchButton from '../components/WatchButton';
import PlusButton from '../components/PlusButton';
import SideContent from '../components/SideContent';
import Slider from '../components/Slider';

import { HomeSection, NavHeader, MainBanner } from '../styles/home';
import { getMovies, getSeries, getTrendingSeries } from '../services/apiCalls';

type TvShow = {
	id: number;
	name: string;
	poster_path: string;
	backdrop_path: string;
};

type Movie = {
	id: number;
	mal_id: number;
	image_url: string;

	title: string;
	name: string;
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

					<Link href="/animes">
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

			<SideContent
				popularMovies={popularMovies}
				headerTitle="Movies"
				buttonLink="/category/movie"
			/>
		</main>
	);
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
	const { series } = await getTrendingSeries();

	const { popularSeries } = await getSeries();

	const { popularMovies } = await getMovies();

	return {
		props: {
			series,
			popularSeries,
			popularMovies,
		},
	};
};
