import React from 'react';
import { GetServerSideProps } from 'next';
import PlayingNowCard from '../../components/PlayingNowCard';
import SideContent from '../../components/SideContent';
import { getMovies, getSeries } from '../../services/apiCalls';
import * as S from '../../styles/category/content';

const CategoryMovie = ({ movies, popularSeries }: any) => {
	return (
		<>
			<S.Container>
				<h1>Movies</h1>

				<S.Content>
					{movies.map(serie => (
						<PlayingNowCard serie={serie} />
					))}
				</S.Content>
			</S.Container>

			<SideContent popularMovies={popularSeries} headerTitle="Tv Show" />
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
