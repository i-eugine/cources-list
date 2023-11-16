import React, { FC, useState } from 'react';
import styled from 'styled-components';

import { Button, Input } from '@components';

const SearchBarWrapper = styled.form`
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
				placeholder='Input text'
				value={search}
				onChange={(e) => setSearch(e.target.value)}
			/>
			<Button type='submit'>SEARCH</Button>
		</SearchBarWrapper>
	);
};
