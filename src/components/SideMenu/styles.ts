import styled from 'styled-components';

export const Container = styled.aside`
	height: 100vh;
	width: 234px;
	border-right: 2px solid #e4ecff;
	padding-left: 40px;
	padding-top: 30px;

	h3 {
		margin-bottom: 32px;
		font-size: 18px;
	}
`;

export const Menu = styled.nav`
	display: flex;
	flex-direction: column;

	h1 {
		color: var(--text-light);
		font-size: 1rem;
		letter-spacing: 1px;
	}

	a {
		display: flex;
		align-items: center;
		justify-content: flex-start;

		gap: 0.8rem;

		font-size: 0.9rem;
		text-decoration: none;
		color: var(--text);
		font-weight: 700;

		&:nth-child(2) {
			color: #ef6b96;
			border-right: 6px solid #ef6b96;
		}
	}

	gap: 1.5rem;
`;
