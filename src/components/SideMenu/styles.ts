import styled from 'styled-components';

export const Container = styled.aside`
	height: 100vh;
	width: 234px;
	border-right: 2px solid #e4ecff;
	padding-left: 40px;
	padding-top: 10px;

	h3 {
		margin-bottom: 32px;
		font-size: 1rem;
	}
`;

export const Menu = styled.nav`
	display: flex;
	flex-direction: column;
	margin-bottom: 2rem;

	h1 {
		color: var(--text-light);
		font-size: 0.9rem;
		letter-spacing: 2px;
	}

	a {
		display: flex;
		align-items: center;
		justify-content: flex-start;

		gap: 1rem;

		font-size: 0.85rem;
		text-decoration: none;
		color: var(--text);
		font-weight: 700;
		transition: filter 0.3s;

		&.active {
			color: #e9316e;
			border-right: 4px solid #e9316e;
		}

		&:hover {
			filter: brightness(0.65);
		}
	}

	gap: 1rem;
`;
