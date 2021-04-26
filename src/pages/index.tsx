import React from 'react';
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
	Card,
	PlayingNowHeader,
	PlayingNowContent,
} from '../styles/home';
import WatchButton from '../components/WatchButton';
import PlusButton from '../components/PlusButton';
import SideContent from '../components/SideContent';
import api from '../services/api';

type TvShow = {
	id: number;
	name: string;
	poster_path: string;
	backdrop_path: string;
};

type HomeProps = {
	series: TvShow[];
	popularSeries: TvShow[];
};

const Home = ({ series, popularSeries }: HomeProps) => {
	const imageBaseURL = 'https://image.tmdb.org/t/p/w500';

	const imageBaseHighResolutionURL =
		'https://image.tmdb.org/t/p/t/p/w1920_and_h800_multi_faces';

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

					<div id="buttons">
						<WatchButton />
						<PlusButton />
					</div>
				</MainBanner>

				<PlayingNow>
					<PlayingNowHeader>
						<h3>Now Playing</h3>

						<div>
							<CgChevronLeftO size={32} color="#91a0b6" />
							<CgChevronRightO size={32} color="#91a0b6" />
						</div>
					</PlayingNowHeader>

					<PlayingNowContent>
						{series.map(serie => (
							<Card key={serie.id}>
								<PlusButton />
								<WatchButton />
								<Image
									src={`${imageBaseURL}${serie.poster_path}`}
									alt={serie.name}
									width={2000}
									height={3000}
									objectFit="cover"
								/>
							</Card>
						))}
					</PlayingNowContent>
				</PlayingNow>
			</HomeSection>

			<SideContent />
		</main>
	);
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
	const { data } = await api.get(
		`trending/tv/week?api_key=484e4f3139aad3bd78ac1031740719a8&language=pt-br`
	);

	const series = data.results.filter((_, index: number) => index <= 3);

	const response = await api.get(
		'tv/on_the_air?api_key=484e4f3139aad3bd78ac1031740719a8&language=pt_BR&page=1'
	);

	const popularSeries = response.data.results;

	return {
		props: {
			series,
			popularSeries,
		},
	};
};
