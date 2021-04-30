import styled, { keyframes } from 'styled-components';

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const HomeSection = styled.section`
	margin: 1.1rem;
	margin-left: 17.625rem;
	margin-right: 2.6rem;

	overflow: hidden;

	animation: ${appearFromLeft} 1s;
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
