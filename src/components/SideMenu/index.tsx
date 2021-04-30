import React from 'react';

import Link from 'next/link';

import { HiHome, HiShieldCheck } from 'react-icons/hi';

import { GiAncientSword } from 'react-icons/gi';

import { RiSlideshow3Fill } from 'react-icons/ri';

import { IoSettingsSharp, IoLogOut } from 'react-icons/io5';

import {
	FaCompass,
	FaTrophy,
	FaUser,
	FaClock,
	FaStar,
	FaDownload,
	FaVideo,
} from 'react-icons/fa';

import { useRouter } from 'next/dist/client/router';
import { Container, Menu } from './styles';

const SideMenu: React.FC = () => {
	const { pathname } = useRouter();

	const home =
		pathname === '/' || pathname === '/animes' || pathname === '/movies';

	return (
		<Container>
			<h3>Next Movies</h3>
			<Menu>
				<h1>MENU</h1>

				<Link href="/">
					<a className={home ? 'active' : ''}>
						<HiHome size={20} color={home ? '#E9316E' : '#78889E'} />
						Home
					</a>
				</Link>

				<Link href="/">
					<a>
						<HiShieldCheck size={20} color="#78889E" />
						Community
					</a>
				</Link>

				<Link href="/">
					<a>
						<FaCompass size={20} color="#78889E" />
						Discover
					</a>
				</Link>

				<Link href="/">
					<a>
						<FaTrophy size={20} color="#78889E" />
						Awards
					</a>
				</Link>

				<Link href="/">
					<a>
						<FaUser size={20} color="#78889E" />
						Celebs
					</a>
				</Link>
			</Menu>

			<Menu>
				<h1>LIBRARY</h1>

				<Link href="/">
					<a>
						<FaClock size={20} color="#78889E" />
						Recent
					</a>
				</Link>

				<Link href="/">
					<a>
						<FaStar size={20} color="#78889E" />
						Top Rated
					</a>
				</Link>

				<Link href="/">
					<a>
						<FaDownload size={20} color="#78889E" />
						Downloaded
					</a>
				</Link>
			</Menu>

			<Menu>
				<h1>CATEGORY</h1>
				<Link href="/category/tvshow">
					<a className={pathname === '/category/tvshow' ? 'active' : ''}>
						<RiSlideshow3Fill
							size={20}
							color={pathname === '/category/tvshow' ? '#E9316E' : '#78889E'}
						/>
						TV - Show
					</a>
				</Link>

				<Link href="/category/movie">
					<a className={pathname === '/category/movie' ? 'active' : ''}>
						<FaVideo
							size={20}
							color={pathname === '/category/movie' ? '#E9316E' : '#78889E'}
						/>
						Movie
					</a>
				</Link>

				<Link href="/category/anime">
					<a className={pathname === '/category/anime' ? 'active' : ''}>
						<GiAncientSword
							size={20}
							color={pathname === '/category/anime' ? '#E9316E' : '#78889E'}
						/>
						Anime
					</a>
				</Link>
			</Menu>

			<Menu>
				<h1>GENERAL</h1>
				<Link href="/">
					<a>
						<IoSettingsSharp size={20} color="#78889E" />
						Settings
					</a>
				</Link>

				<Link href="/">
					<a>
						<IoLogOut size={20} color="#78889E" />
						Logout
					</a>
				</Link>
			</Menu>
		</Container>
	);
};

export default SideMenu;
