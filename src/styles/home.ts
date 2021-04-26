import styled from 'styled-components';

export const HomeSection = styled.section`
	margin: 1.5rem 2.5rem;
`;

export const NavHeader = styled.nav`
	display: flex;
	gap: 2rem;
	margin-bottom: 1.2rem;

	a {
		text-decoration: none;
		color: var(--text-light);
		font-size: 1rem;
		font-weight: bold;

		&.active {
			color: var(--text-secondary);
			font-weight: bold;
		}
	}
`;

export const MainBanner = styled.div`
	position: relative;
	img {
		height: 300px;
		width: 880px;
	}

	#buttons {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.9rem;
		bottom: 2.5rem;
		left: 3.5rem;
		position: absolute;
	}
`;

export const PlayingNow = styled.section``;

export const PlayingNowContent = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
`;

export const PlayingNowHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-top: 1.5rem;

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

export const Card = styled.div`
	position: relative;
	width: 182px;
	height: 274px;

	button:nth-child(1) {
		position: absolute;
		z-index: 1;
		right: 0.5rem;
		top: 0.4rem;
	}

	button:nth-child(2) {
		position: absolute;
		z-index: 1;
		bottom: 1rem;
		right: 0.85rem;
	}
`;

export const SearchSection = styled.div`
	border-left: 2px solid #e4ecff;
`;
