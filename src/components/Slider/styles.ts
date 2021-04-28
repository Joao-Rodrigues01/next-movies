import styled from 'styled-components';

export const PlayingNow = styled.section`
	width: 100%;
	max-width: 892px;
`;

export const PlayingNowContent = styled.div`
	display: flex;
	gap: 2.2rem;
	transition: transform 0.7s;
`;

export const PlayingNowHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-top: 1.5rem;

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
