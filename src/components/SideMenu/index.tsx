import React from 'react';

import { HiHome, HiShieldCheck } from 'react-icons/hi';
import { FaCompass, FaTrophy, FaUser } from 'react-icons/fa';
import { Container, Menu } from './styles';

const SideMenu: React.FC = () => {
	return (
		<Container>
			<h3>Next Movies</h3>
			<Menu>
				<h1>MENU</h1>

				<a href="/">
					<HiHome size={22} color="#E9316E" />
					Home
				</a>

				<a href="/">
					<HiShieldCheck size={22} color="#78889E" />
					Community
				</a>

				<a href="/">
					<FaCompass size={22} color="#78889E" />
					Discover
				</a>

				<a href="/">
					<FaTrophy size={22} color="#78889E" />
					Awards
				</a>

				<a href="/">
					<FaUser size={22} color="#78889E" />
					Celebs
				</a>
			</Menu>
		</Container>
	);
};

export default SideMenu;
