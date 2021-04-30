import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	position: relative;
	z-index: 100;
	img {
		width: 188px;
		height: 280px;

		@media (max-width: 970px) {
			width: 168px;
			height: 260px;
		}
	}
	transform: translateY(120px);
	animation: animeLeft 0.65s forwards;

	:nth-child(2) {
		animation: animeLeft 0.75s forwards;
	}

	:nth-child(3) {
		animation: animeLeft 0.85s forwards;
	}

	:nth-child(4) {
		animation: animeLeft 0.95s forwards;
	}

	@keyframes animeLeft {
		to {
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
