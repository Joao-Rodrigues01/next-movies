import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	position: relative;
	z-index: 100;
	img {
		width: 188px;
		height: 280px;
	}
	opacity: 0;
	transform: translateY(25px);
	animation: animeLeft 1.4s forwards;

	:nth-child(2) {
		animation: animeLeft 1s forwards;
	}

	:nth-child(3) {
		animation: animeLeft 0.6s forwards;
	}

	:nth-child(4) {
		animation: animeLeft 0.2s forwards;
	}

	@keyframes animeLeft {
		to {
			opacity: 1;
			transform: initial;
		}
	}

	button:nth-child(1) {
		position: absolute;
		z-index: 1;
		right: 0.85rem;
		top: 0.7rem;
	}

	button:nth-child(2) {
		position: absolute;
		z-index: 1;
		bottom: 1rem;
		right: 0.95rem;
	}
`;

export default Container;
