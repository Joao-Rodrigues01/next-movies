import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { CgChevronLeftO, CgChevronRightO } from 'react-icons/cg';
import { GetServerSideProps } from 'next';
import SideMenu from '../components/SideMenu';

import {
	HomeSection,
	NavHeader,
	MainBanner,
	PlayingNow,
	PlayingNowHeader,
	PlayingNowContent,
} from '../styles/home';
import WatchButton from '../components/WatchButton';
import PlusButton from '../components/PlusButton';
import SideContent from '../components/SideContent';
import api from '../services/api';
import PlayingNowCard from '../components/PlayingNowCard';

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

	const [position, setPosition] = useState<number>(0);
	const [active, setActive] = useState<number>(0);

	function prevMovie() {
		if (position <= 0) return;
		setActive(prev => prev - 1);
		setPosition(prev => prev - 223);
	}

	function nextMovie() {
		if (active === series.length - 2) return;
		setActive(prev => prev + 1);
		setPosition(prev => prev + 223);
	}

	return (
		<main>
			<Head>
				<title>Next Movies</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<SideMenu />

			<HomeSection>
				<NavHeader>
					<a href="/">Movie</a>
					<a href="/" className="active">
						TV Show
					</a>
					<a href="/">Anime</a>
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

				<PlayingNow>
					<PlayingNowHeader>
						<h3>Now Playing</h3>

						<div>
							<CgChevronLeftO onClick={prevMovie} size={32} color="#c6d1eb" />
							<CgChevronRightO onClick={nextMovie} size={32} color="#c6d1eb" />
						</div>
					</PlayingNowHeader>

					<PlayingNowContent
						style={{ transform: `translateX(-${position}px)` }}
					>
						{series.map(serie => (
							<PlayingNowCard key={serie.id} serie={serie} />
						))}
					</PlayingNowContent>
				</PlayingNow>
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
