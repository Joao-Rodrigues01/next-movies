import React, { useState } from 'react';
import { CgChevronLeftO, CgChevronRightO } from 'react-icons/cg';
import PlayingNowCard from '../PlayingNowCard';

import { PlayingNow, PlayingNowContent, PlayingNowHeader } from './styles';

type TvShow = {
	id: number;
	name: string;
	poster_path: string;
	backdrop_path: string;
};

type SliderProps = {
	series: TvShow[];
};

const Slider = ({ series }: SliderProps) => {
	const [position, setPosition] = useState<number>(0);
	const [active, setActive] = useState<number>(0);

	function prevMovie() {
		if (position <= 0) return;
		setActive(prev => prev - 1);
		setPosition(prev => prev - 223);
	}

	function nextMovie() {
		if (active === series.length - 4) {
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
				{series.map(serie => (
					<PlayingNowCard key={serie.id} serie={serie} />
				))}
			</PlayingNowContent>
		</PlayingNow>
	);
};

export default Slider;
