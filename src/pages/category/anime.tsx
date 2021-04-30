import React from 'react';
import { GetServerSideProps } from 'next';
import { getAnimes } from '../../services/apiCalls';
import * as S from '../../styles/category/content';
import SideContent from '../../components/SideContent';
import AnimeCard from '../../components/AnimeCard';

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

const CategoryAnime = ({ animes, popularAnimes }: AnimesProps) => {
	return (
		<>
			<S.Container>
				<h1>Animes</h1>

				<S.Content>
					{animes.map(anime => (
						<AnimeCard key={anime.mal_id} anime={anime} />
					))}
				</S.Content>
			</S.Container>

			<SideContent
				popularMovies={popularAnimes}
				headerTitle="Animes"
				buttonLink="/category/anime"
			/>
		</>
	);
};

export default CategoryAnime;

export const getServerSideProps: GetServerSideProps = async () => {
	const { animes, popularAnimes } = await getAnimes();

	return {
		props: {
			animes,
			popularAnimes,
		},
	};
};
