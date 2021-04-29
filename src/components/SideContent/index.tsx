import Image from 'next/image';
import React from 'react';

import { FiSearch } from 'react-icons/fi';
import { HiStar } from 'react-icons/hi';

import {
	Container,
	SearchBarContainer,
	PopularMoviesContainer,
	PopularMoviesCard,
	PopularMoviesCardMovieInfo,
} from './styles';

type Movie = {
	id: number;
	mal_id: number;
	title: string;
	image_url: string;
	name: string;
	poster_path: string;
	vote_average: number;
};

type SideContentProps = {
	popularMovies: Movie[];
	headerTitle: string;
};

const SideContent = ({ popularMovies, headerTitle }: SideContentProps) => {
	const imageBaseURL = 'https://image.tmdb.org/t/p/w500';

	return (
		<Container>
			<SearchBarContainer>
				<FiSearch size={24} color="#3A476C" />
				<input type="text" placeholder="Search" />
			</SearchBarContainer>

			<PopularMoviesContainer>
				<h2>Popular {headerTitle}</h2>

				{popularMovies.map(movie => (
					<PopularMoviesCard
						key={headerTitle === 'Animes' ? movie.mal_id : movie.id}
					>
						<Image
							src={
								headerTitle === 'Animes'
									? movie.image_url
									: `${imageBaseURL}${movie.poster_path}`
							}
							alt={headerTitle === 'Tv Shows' ? movie.name : movie.title}
							width={2000}
							height={3000}
							objectFit="cover"
						/>
						<PopularMoviesCardMovieInfo>
							<p>{headerTitle === 'Tv Shows' ? movie.name : movie.title}</p>
							<span>Action, Fantasy</span>
							<div>
								<HiStar size={23} color="#FA7C05" />
								<HiStar size={23} color="#FA7C05" />
								<HiStar size={23} color="#FA7C05" />
								<HiStar size={23} color="#FA7C05" />
								<HiStar size={23} color="#DAE5FF" />
							</div>
						</PopularMoviesCardMovieInfo>

						{headerTitle === 'Animes' ? (
							''
						) : (
							<span>AVG : {movie.vote_average}</span>
						)}
					</PopularMoviesCard>
				))}

				<button type="button">See More</button>
			</PopularMoviesContainer>
		</Container>
	);
};

export default SideContent;
