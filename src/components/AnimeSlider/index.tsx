import React, { useState } from 'react';
import { CgChevronLeftO, CgChevronRightO } from 'react-icons/cg';
import AnimeCard from '../AnimeCard';

import { PlayingNow, PlayingNowContent, PlayingNowHeader } from './styles';

type Anime = {
	mal_id: number;
	title: string;
	image_url: string;
};

type AnimeSliderProps = {
	animes: Anime[];
};

const AnimeSlider = ({ animes }: AnimeSliderProps) => {
	const [position, setPosition] = useState<number>(0);
	const [active, setActive] = useState<number>(0);

	function prevMovie() {
		if (position <= 0) return;
		setActive(prev => prev - 1);
		setPosition(prev => prev - 223);
	}

	function nextMovie() {
		if (active === animes.length - 4) {
			setPosition(0);
			setActive(0);
			return;
		}
		setActive(prev => prev + 1);
		setPosition(prev => prev + 223);
	}
	return (
		<PlayingNow>
			<PlayingNowHeader>
				<h3>Now Playing</h3>

				<div>
					<CgChevronLeftO onClick={prevMovie} size={32} color="#c6d1eb" />
					<CgChevronRightO onClick={nextMovie} size={32} color="#c6d1eb" />
				</div>
			</PlayingNowHeader>

			<PlayingNowContent style={{ transform: `translateX(-${position}px)` }}>
				{animes.map(anime => (
					<AnimeCard key={String(anime.mal_id)} anime={anime} />
				))}
			</PlayingNowContent>
		</PlayingNow>
	);
};

export default AnimeSlider;
