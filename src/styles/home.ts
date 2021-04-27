import styled from 'styled-components';

export const HomeSection = styled.section`
	margin: 1.1rem 3rem;
	overflow: hidden;
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
		height: 306.4px;
		width: 880px;
	}

	#serie-info {
		position: absolute;
		bottom: 6rem;
		left: 3.5rem;

		p {
			font-size: 0.7rem;
			color: #f5f5f5;
			font-weight: bold;
		}

		h1 {
			font-size: 2.5rem;
			color: #fff;
			letter-spacing: 2px;
			text-transform: uppercase;
		}

		span {
			color: #ddd;
			font-size: 0.65rem;
			font-weight: 600;
		}
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

export const PlayingNow = styled.section`
	width: 100%;
	max-width: 900px;
`;

export const PlayingNowContent = styled.div`
	display: flex;
	gap: 2.2rem;
	transition: transform 0.4s;
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
