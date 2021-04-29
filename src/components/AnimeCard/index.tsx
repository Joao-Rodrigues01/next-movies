import React from 'react';
import PlusButton from '../PlusButton';
import WatchButton from '../WatchButton';
import Container from './styles';

type Props = {
	anime: {
		mal_id: number;
		title: string;
		image_url: string;
	};
};

const AnimeCard = ({ anime }: Props) => {
	return (
		<Container>
			<PlusButton />
			<WatchButton />
			<img src={anime.image_url} alt={anime.title} />
		</Container>
	);
};

export default AnimeCard;
