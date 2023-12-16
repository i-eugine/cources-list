import React, { FC } from 'react';

import { AddIcon, DeleteIcon } from '@components';
import { Flex } from '@components/style';
import { IAuthor } from '@models';
import { TextCommon } from '@styles/typography';

type AuthorItemProps = {
  author: IAuthor;
  onAdd?: (_: IAuthor) => void;
  onDelete?: (_: IAuthor) => void;
};

export const AuthorItem: FC<AuthorItemProps> = ({ author, onAdd, onDelete }) => (
  <Flex $alignItems='center' $gap={'2px'}>
    <TextCommon $width='140px'>{author.name}</TextCommon>

    {onAdd && <AddIcon onClick={() => onAdd(author)} />}
    {onDelete && <DeleteIcon onClick={() => onDelete(author)} />}
  </Flex>
);
