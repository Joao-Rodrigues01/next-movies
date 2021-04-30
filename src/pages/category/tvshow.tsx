import React from 'react';
import { GetServerSideProps } from 'next';
import PlayingNowCard from '../../components/PlayingNowCard';
import SideContent from '../../components/SideContent';
import { getMovies, getSeries } from '../../services/apiCalls';
import * as S from '../../styles/category/content';

const CategoryTvShow = ({ series, popularMovies }: any) => {
	return (
		<>
			<S.Container>
				<h1>Tv Shows</h1>

				<S.Content>
					{series.map(serie => (
						<PlayingNowCard serie={serie} />
					))}
				</S.Content>
			</S.Container>

			<SideContent popularMovies={popularMovies} headerTitle="Movies" />
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
