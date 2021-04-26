import styled from 'styled-components';

export const Container = styled.button`
	background: transparent;

	position: relative;
	div {
		height: 2.7rem;
		width: 2.7rem;

		display: flex;
		align-items: center;
		justify-content: center;

		background: rgba(155, 155, 155, 0.85);
		filter: blur(0.8px);
	}
	span {
		position: absolute;
		top: 0.05rem;
		left: 0.02rem;

		height: 2.7rem;
		width: 2.7rem;

		color: white;
		font-size: 1.75rem;
		z-index: 10;
	}
`;

export default Container;
