import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import { AddIcon, DeleteIcon } from '@components';
import { Flex } from '@components/style';
import { IAuthor } from '@models';
import { TextCommon } from '@styles/typography';

type Props = {
	author: IAuthor;
	onAdd?: (_: IAuthor) => void;
	onDelete?: (_: IAuthor) => void;
};

export const AuthorItem: FC<Props> = ({ author, onAdd, onDelete }) => {
	useSelector(() => null);
	return (
		<Flex $alignItems='center' $gap={'2px'}>
			<TextCommon $width='140px'>{author.name}</TextCommon>

			{onAdd && <AddIcon onClick={() => onAdd(author)} />}
			{onDelete && <DeleteIcon onClick={() => onDelete(author)} />}
		</Flex>
	);
};
