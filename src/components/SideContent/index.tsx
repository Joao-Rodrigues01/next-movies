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

const SideContent = () => {
	return (
		<Container>
			<SearchBarContainer>
				<FiSearch size={24} color="#3A476C" />
				<input type="text" placeholder="Search" />
			</SearchBarContainer>

			<PopularMoviesContainer>
				<h2>Popular Movies</h2>

				<PopularMoviesCard>
					<Image
						src="/mortal.jpg"
						alt="imagem dos filmes populares"
						width={2000}
						height={3000}
						objectFit="cover"
					/>
					<PopularMoviesCardMovieInfo>
						<p>Mortal Kombat</p>
						<span>Action, Fantasy</span>
					</PopularMoviesCardMovieInfo>

					<span>PG - 13</span>
				</PopularMoviesCard>

				<PopularMoviesCard>
					<Image
						src="/kong.jpg"
						alt="imagem dos filmes populares"
						width={2000}
						height={3000}
						objectFit="cover"
					/>
					<PopularMoviesCardMovieInfo>
						<p>Godzilla vs. Kong</p>
						<span>Action, Fantasy</span>
					</PopularMoviesCardMovieInfo>

					<span>NC - 17</span>
				</PopularMoviesCard>

				<button type="button">See More</button>
			</PopularMoviesContainer>
		</Container>
	);
};

export default SideContent;
