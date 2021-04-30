import styled from 'styled-components';

export const Container = styled.main`
	display: flex;
	flex-direction: column;
	margin: 1.1rem;
	margin-left: 17.625rem;
	margin-right: 2.6rem;

	h1 {
		margin-bottom: 2rem;
		color: var(--text-light);
	}
`;

export const Content = styled.section`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 2rem;
`;
