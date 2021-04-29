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

const Animes = ({ animes, popularAnimes }) => {
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
