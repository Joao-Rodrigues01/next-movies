import React from 'react';
import { GetServerSideProps } from 'next';
import { getMovies, getSeries } from '../../services/apiCalls';
import * as S from '../../styles/category/content';
import PlayingNowCard from '../../components/PlayingNowCard';
import SideContent from '../../components/SideContent';

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

type MoviesProps = {
	movies: Movie[];
	popularSeries: Movie[];
};

const CategoryMovie = ({ movies, popularSeries }: MoviesProps) => {
	return (
		<>
			<S.Container>
				<h1>Movies</h1>

				<S.Content>
					{movies.map(serie => (
						<PlayingNowCard key={serie.id} serie={serie} />
					))}
				</S.Content>
			</S.Container>

			<SideContent
				popularMovies={popularSeries}
				headerTitle="Tv Show"
				buttonLink="/category/tvshow"
			/>
		</>
	);
};

export default CategoryMovie;

export const getServerSideProps: GetServerSideProps = async () => {
	const { popularSeries } = await getSeries();

	const { movies } = await getMovies();

	return {
		props: {
			movies,
			popularSeries,
		},
	};
};
