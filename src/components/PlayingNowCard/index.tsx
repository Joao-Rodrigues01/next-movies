import React from 'react';
import PlusButton from '../PlusButton';
import WatchButton from '../WatchButton';
import Container from './styles';

type Props = {
	serie: {
		id: number;
		name: string;
		poster_path: string;
	};
};

const PlayingNowCard = ({ serie }: Props) => {
	const imageBaseURL = 'https://image.tmdb.org/t/p/w500';

	return (
		<Container>
			<PlusButton />
			<WatchButton />
			<img src={`${imageBaseURL}${serie.poster_path}`} alt={serie.name} />
		</Container>
	);
};

export default PlayingNowCard;
