import styled from 'styled-components';

export const Container = styled.div`
	border-left: 2px solid #e4ecff;
	padding: 1.8rem 2.5rem;

	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const SearchBarContainer = styled.div`
	width: 16.125rem;
	height: 2.5rem;
	background: #f1f7ff;
	border-radius: 1.5rem;

	display: flex;
	align-items: center;
	justify-content: center;
	gap: 0.4rem;
	padding-left: 1.5rem;

	input {
		background: inherit;
		color: var(--text);

		&::placeholder {
			color: var(--text-light);
			font-size: 0.875rem;
			opacity: 1;
		}
	}
`;
