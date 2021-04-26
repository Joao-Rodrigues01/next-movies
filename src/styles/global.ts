import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
	  * {
    margin: 0;
    padding: 0;
    outline: 0;
    border: 0;
    list-style: none;
    box-sizing: border-box;
  }

	font-size: 62.5%;
	html {
    height: 100%;
  }

	:root {
		--white: #fff;
		--text:  #3A476C;
		--text-secondary: #38466B;
		--text-light: #78889E;
		--text-hover: #E9316E;
		--text-hover2: #EF6B96;
		--input-background: #F1F7FF;
		--button: #E71D60;
		--button-text: #FDEFF4;
		--button-secondary: #FDE8EF;

	}

	body {
		height: auto;
		background: var(--white);
		color: var(--text);
		font: 400 16px Poppins, sans-serif;
		-webkit-font-smoothing: antialiased !important;
    -moz-osx-font-smoothing: grayscale;
	}

	#__next {
		height: 100%;
	}
	button {
		cursor: pointer;
		border: 0;
	}

	body, input, button {
    font: 1rem/1.48 'Poppins', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-weight: 500;
  }

	h1, h2, h3, strong {
    color: var(--text-secondary);
		font-weight: 700;

  }

	main {
		display: flex;
	}
`;
