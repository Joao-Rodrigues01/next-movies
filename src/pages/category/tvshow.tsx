import React from 'react';
import { GetServerSideProps } from 'next';
import PlayingNowCard from '../../components/PlayingNowCard';
import SideContent from '../../components/SideContent';
import { getMovies, getSeries } from '../../services/apiCalls';
import * as S from '../../styles/category/content';

type Movie = {
	id: number;
	mal_id: number;
	image_url: string;

	title: string;
	name: string;
	poster_path: string;
	backdrop_path: string;
	vote_average: number;
};

type TvShowProps = {
	series: Movie[];
	popularMovies: Movie[];
};

const CategoryTvShow = ({ series, popularMovies }: TvShowProps) => {
	return (
		<>
			<S.Container>
				<h1>Tv Shows</h1>

				<S.Content>
					{series.map(serie => (
						<PlayingNowCard key={serie.id} serie={serie} />
					))}
				</S.Content>
			</S.Container>

			<SideContent
				popularMovies={popularMovies}
				headerTitle="Movies"
				buttonLink="/category/movie"
			/>
		</>
	);
};

export default CategoryTvShow;

export const getServerSideProps: GetServerSideProps = async () => {
	const { series } = await getSeries();

	const { popularMovies } = await getMovies();

	return {
		props: {
			series,
			popularMovies,
		},
	};
};
