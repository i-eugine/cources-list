import { DeleteButton } from '@components';
import { authorsStore } from '@store/authors.store';

type DeleteAuthorButtonProps = {
  id: string;
};
export const DeleteAuthorButton: React.FC<DeleteAuthorButtonProps> = ({ id }) => {
  const { deleteAuthor } = authorsStore;

  const onDelete = async () => {
    deleteAuthor(id);
  };

  return <DeleteButton entityName='author' size='small' onDelete={onDelete} />;
};
