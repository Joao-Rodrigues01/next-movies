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

		background: rgba(155, 155, 155, 0.2);
		filter: blur(7px);
		backdrop-filter: blur(10px);
		transition: all 0.2s;
		&:hover {
			background: #fff;
		}
	}
	span {
		position: absolute;
		top: 0.05rem;
		left: 0.02rem;
		backdrop-filter: blur(2px);

		height: 2.7rem;
		width: 2.7rem;

		color: white;
		font-size: 1.75rem;
		z-index: 10;
		transition: all 0.2s;

		&:hover {
			background: #fff;
			color: var(--button);
		}
	}
`;

export default Container;
