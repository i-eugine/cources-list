import { Flex } from '@components/style/Flex';
import React, { FC, useState } from 'react';

import { Label, Input, Button } from '@components';
import { Box } from '@components/style';
import { IAuthor } from '@models';
import { Heading5 } from '@styles/typography';

import { AuthorItem } from './AuthorItem';

type Props = {
	authors: IAuthor[];
	onAdd: (author: IAuthor) => void;
	onCreate: (authorName: string) => void;
	onDelete: (authorId: string) => void;
};

export const AuthorsBlock: FC<Props> = ({
	authors,
	onAdd,
	onCreate,
	onDelete,
}) => {
	const [authorInput, setAuthorInput] = useState('');

	return (
		<div>
			<Flex $alignItems='end' $gap={'lg'} $marginBottom={'md'}>
				<Box $width='300px'>
					<Label>Author Name</Label>

					<Input
						value={authorInput}
						onChange={(e) => setAuthorInput(e.target.value)}
					/>
				</Box>

				<Button type='button' onClick={() => onCreate(authorInput)}>
					create author
				</Button>
			</Flex>

			<Heading5>Authors List</Heading5>

			<Flex $flexDirection={'column'} $gap={'xs'} $marginTop={'md'}>
				{authors.map((author) => (
					<AuthorItem
						key={author.id}
						author={author}
						onAdd={onAdd}
						onDelete={({ id }) => onDelete(id)}
					/>
				))}
			</Flex>
		</div>
	);
};
