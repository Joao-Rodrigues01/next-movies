import React from 'react';
import { AppProps } from 'next/app';
import NextProgress from 'nextjs-progressbar';

import { ThemeProvider } from 'styled-components';
import Head from 'next/head';
import GlobalStyle from '../styles/global';
import theme from '../styles/theme';
import SideMenu from '../components/SideMenu';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<NextProgress
				color="#E9316E"
				startPosition={0.3}
				stopDelayMs={200}
				height={3}
			/>
			<Head>
				<title>Next Movies</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main style={{ display: 'flex' }}>
				<SideMenu />
				<Component {...pageProps} />
			</main>
		</ThemeProvider>
	);
};

export default MyApp;
