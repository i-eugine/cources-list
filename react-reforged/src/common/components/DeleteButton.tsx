import { DeleteFilled } from '@ant-design/icons';
import { Tooltip, Button, Modal } from 'antd';

import { useWithLoading } from '@hooks/useWithLoading';

type DeleteButtonProps = {
  entityName: string;
  size?: 'small' | 'large';
  onDelete: () => Promise<void>;
};
export const DeleteButton: React.FC<DeleteButtonProps> = ({ entityName, size, onDelete }) => {
  const [isLoading, withLoading] = useWithLoading();

  const handleDelete = async () => {
    withLoading(onDelete());
  };

  const title = `Delete ${entityName}`;
  const content = `Are you sure you want to delete this ${entityName}?`;

  return (
    <Tooltip title={title}>
      <Button
        key='delete'
        icon={<DeleteFilled />}
        loading={isLoading}
        shape='circle'
        size={size}
        type='primary'
        onClick={(e) => {
          e.stopPropagation();
          Modal.confirm({ title, content, onOk: handleDelete });
        }}
      />
    </Tooltip>
  );
};
