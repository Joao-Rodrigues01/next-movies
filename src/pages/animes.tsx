import { GetServerSideProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import PlusButton from '../components/PlusButton';
import SideContent from '../components/SideContent';
import AnimeSlider from '../components/AnimeSlider';
import WatchButton from '../components/WatchButton';
import { getAnimes } from '../services/apiCalls';
import { HomeSection, MainBanner, NavHeader } from '../styles/home';

type Anime = {
	mal_id: number;
	title: string;
	image_url: string;
};

type Popular = {
	id: number;
	mal_id: number;
	title: string;
	image_url: string;
	name: string;
	poster_path: string;
	vote_average: number;
};

type AnimesProps = {
	animes: Anime[];
	popularAnimes: Popular[];
};

const Animes = ({ animes, popularAnimes }: AnimesProps) => {
	return (
		<main>
			<HomeSection>
				<NavHeader>
					<Link href="/movies">
						<a>Movie</a>
					</Link>

					<Link href="/">
						<a>TV Show</a>
					</Link>

					<Link href="/animes">
						<a className="active">Anime</a>
					</Link>
				</NavHeader>

				<MainBanner>
					<Image
						src="https://wallpapercave.com/wp/wp8079260.jpg"
						alt="imagem do anime em destaque"
						width={1920}
						height={1080}
						objectFit="cover"
					/>

					<div id="serie-info">
						<p>FINAL SEASON</p>
						<h1>Attack on Titan</h1>

						<span>ACTION, FANTASY</span>
					</div>

					<div id="buttons">
						<WatchButton />
						<PlusButton />
					</div>
				</MainBanner>

				<AnimeSlider animes={animes} />
			</HomeSection>

			<SideContent popularMovies={popularAnimes} headerTitle="Animes" />
		</main>
	);
};

export default Animes;

export const getServerSideProps: GetServerSideProps = async () => {
	const { animes, popularAnimes } = await getAnimes();

	return {
		props: {
			animes,
			popularAnimes,
		},
	};
};
