import styled from 'styled-components';

export const PlayingNow = styled.section`
	width: 100%;
	max-width: 892px;

	@media (max-width: 1400px) {
		width: 88%;
	}
`;

export const PlayingNowContent = styled.div`
	display: flex;
	gap: 2.2rem;
	transition: transform 0.7s;

	@media (max-width: 1400px) {
		width: 400px;
		gap: 1.8rem;
	}
`;

export const PlayingNowHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-top: 1.5rem;

	@media (max-width: 1400px) {
		width: 840px;
	}

	@media (max-width: 1187px) {
		padding-top: 1rem;
		width: 672px;
	}

	@media (max-width: 1130px) {
		width: 580px;
	}

	@media (max-width: 970px) {
		width: 480px;
	}

	svg {
		cursor: pointer;
	}

	h3 {
		font-size: 1rem;
		margin-bottom: 1.5rem;
	}

	div {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.8rem;
		margin-right: 2.5rem;
		padding-bottom: 0.8rem;
	}
`;
