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

	@media (max-width: 1400px) {
		margin: 1.1rem;
		margin-left: 14rem;
		margin-right: 2rem;
	}

	@media (max-width: 1360px) {
		margin: 1.1rem;
		margin-left: 12.5rem;
		margin-right: 1rem;
	}

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
		width: 55rem;

		@media (max-width: 970px) {
			height: 230px;
			width: 32rem;
		}
	}

	@media (max-width: 1400px) {
		width: 52rem;
	}

	@media (max-width: 1187px) {
		width: 42rem;
	}

	@media (max-width: 1130px) {
		width: 36rem;
	}

	@media (max-width: 970px) {
		width: 30rem;
	}

	@media (max-width: 840px) {
		width: 28rem;
	}

	#serie-info {
		position: absolute;
		bottom: 6rem;
		left: 3.5rem;

		@media (max-width: 1187px) {
			bottom: 5rem;
			left: 1rem;
		}

		@media (max-width: 970px) {
			bottom: 4rem;
			left: 1rem;
		}

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

			@media (max-width: 1187px) {
				font-size: 1.8rem;
			}

			@media (max-width: 970px) {
				font-size: 1.3rem;
				letter-spacing: 1px;
			}
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

		@media (max-width: 1187px) {
			gap: 0.6rem;
			bottom: 1rem;
			left: 1rem;
		}
	}
`;
