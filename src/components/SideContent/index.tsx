import Image from 'next/image';
import React from 'react';

import { FiSearch } from 'react-icons/fi';

import {
	Container,
	SearchBarContainer,
	PopularMoviesContainer,
	PopularMoviesCard,
	PopularMoviesCardMovieInfo,
} from './styles';

type Movie = {
	id: number;
	title: string;
	poster_path: string;
	vote_average: number;
};

type SideContentProps = {
	popularMovies: Movie[];
};

const SideContent = ({ popularMovies }: SideContentProps) => {
	const imageBaseURL = 'https://image.tmdb.org/t/p/w500';

	return (
		<Container>
			<SearchBarContainer>
				<FiSearch size={24} color="#3A476C" />
				<input type="text" placeholder="Search" />
			</SearchBarContainer>

			<PopularMoviesContainer>
				<h2>Popular Movies</h2>

				{popularMovies.map(movie => (
					<PopularMoviesCard key={movie.id}>
						<Image
							src={`${imageBaseURL}${movie.poster_path}`}
							alt={movie.title}
							width={2000}
							height={3000}
							objectFit="cover"
						/>
						<PopularMoviesCardMovieInfo>
							<p>{movie.title}</p>
							<span>Action, Fantasy</span>
						</PopularMoviesCardMovieInfo>

						<span>AVG : {movie.vote_average}</span>
					</PopularMoviesCard>
				))}

				<button type="button">See More</button>
			</PopularMoviesContainer>
		</Container>
	);
};

export default SideContent;
