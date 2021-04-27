import styled from 'styled-components';

export const Container = styled.button`
	font-size: 0.9rem;
	width: 9.75rem;
	height: 2.7rem;
	color: var(--white);
	background: var(--button);
	transition: all 0.4s;

	&:hover {
		background: white;
		color: var(--button);
		border: 1px solid var(--button);
	}
`;

export default Container;
