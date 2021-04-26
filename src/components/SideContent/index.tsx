import React from 'react';

import { FiSearch } from 'react-icons/fi';

import { Container, SearchBarContainer } from './styles';

const SideContent = () => {
	return (
		<Container>
			<SearchBarContainer>
				<FiSearch size={24} color="#3A476C" />
				<input type="text" placeholder="Search" />
			</SearchBarContainer>
		</Container>
	);
};

export default SideContent;
