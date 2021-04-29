import styled from 'styled-components';

export const Container = styled.div`
	border-left: 2px solid #e4ecff;

	padding: 1.8rem 2.5rem;
	max-width: 320px;

	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const SearchBarContainer = styled.div`
	width: 16.125rem;
	height: 2.5rem;
	background: #f1f7ff;
	border-radius: 1.5rem;

	display: flex;
	align-items: center;
	justify-content: center;
	gap: 0.4rem;
	padding-left: 1.5rem;

	input {
		background: inherit;
		color: var(--text);

		&::placeholder {
			color: var(--text-light);
			font-size: 0.875rem;
			opacity: 1;
		}
	}
`;

export const PopularMoviesContainer = styled.section`
	margin-top: 1.8rem;
	h2 {
		font-size: 1rem;
		margin-bottom: 1.7rem;
	}

	width: 16.375rem;
	height: 19.7rem;

	display: flex;
	flex-direction: column;

	button {
		height: 3rem;
		background: var(--button-background);
		color: var(--button);

		font-size: 0.8rem;
		font-weight: bold;
	}
`;

export const PopularMoviesCard = styled.div`
	display: flex;
	gap: 0.7rem;
	margin-bottom: 1.2rem;

	img {
		width: 64px;
		height: 90px;
	}

	span {
		font-size: 0.875rem;
		color: var(--text-light);
		font-weight: bold;
		white-space: nowrap;
	}
`;

export const PopularMoviesCardMovieInfo = styled.div`
	display: flex;
	flex-direction: column;

	p {
		font-size: 0.875rem;
		color: var(--text);
		font-weight: bold;
		max-width: 116px;

		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	span {
		color: var(--text-light);
		font-size: 0.785rem;
		font-weight: bold;
		margin-bottom: 0.4rem;
	}
`;
