import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { CgChevronLeftO, CgChevronRightO } from 'react-icons/cg';
import SideMenu from '../components/SideMenu';

import {
	HomeSection,
	NavHeader,
	MainBanner,
	SearchSection,
	PlayingNow,
	Card,
	PlayingNowHeader,
	PlayingNowContent,
} from '../styles/home';
import WatchButton from '../components/WatchButton';
import PlusButton from '../components/PlusButton';

const Home: React.FC = () => {
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
						src="/supernatural.jpg"
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
						<Card>
							<PlusButton />
							<WatchButton />
							<Image
								src="/falcon.jpg"
								alt="imagem das series no momento"
								width={2000}
								height={3000}
								objectFit="cover"
							/>
						</Card>

						<Card>
							<PlusButton />
							<WatchButton />
							<Image
								src="/good-doctor.jpg"
								alt="imagem das series no momento"
								width={2000}
								height={3000}
								objectFit="cover"
							/>
						</Card>

						<Card>
							<PlusButton />
							<WatchButton />
							<Image
								src="/flash.jpg"
								alt="imagem das series no momento"
								width={2000}
								height={3000}
								objectFit="cover"
							/>
						</Card>

						<Card>
							<PlusButton />
							<WatchButton />
							<Image
								src="/grays-anatomy.jpg"
								alt="imagem das series no momento"
								width={2000}
								height={3000}
								objectFit="cover"
							/>
						</Card>
					</PlayingNowContent>
				</PlayingNow>
			</HomeSection>

			<SearchSection />
		</main>
	);
};

export default Home;
