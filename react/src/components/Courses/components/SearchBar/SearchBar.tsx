import React, { FC, useState  } from 'react';
import { Button, Input } from 'src/common';
import styled from 'styled-components';

const SearchBarWrapper = styled.div`
	display: flex;
	gap: 12px;
`;

interface Props {
	searchHandler: (value: string) => void;
}

export const SearchBar: FC<Props> = ({ searchHandler }) => {
	const [search, setSearch] = useState('');

	return (
		<SearchBarWrapper
			onSubmit={(e) => {
				e.preventDefault();
				searchHandler(search);
			}}
		>
			<Input
				value={search}
				onChange={(e) => setSearch(e.target.value)}
				placeholder='Input text'
			/>
			<Button type='submit'>SEARCH</Button>
		</SearchBarWrapper>
	);
};
