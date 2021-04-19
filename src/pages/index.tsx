import React from 'react';
import Head from 'next/head';
import SideMenu from '../components/SideMenu';

const Home: React.FC = () => {
	return (
		<main>
			<Head>
				<title>Next Movies</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<SideMenu />

			<h1>Hello world</h1>
		</main>
	);
};

export default Home;
