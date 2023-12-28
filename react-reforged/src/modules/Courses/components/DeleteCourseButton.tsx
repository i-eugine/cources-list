import { DeleteFilled } from '@ant-design/icons';
import { Tooltip, Button, Modal } from 'antd';
import { FC } from 'react';

import { withMessage, MESSAGE_KEYS } from '@common-modules/message';
import { useWithLoading } from '@hooks/useWithLoading';
import { CoursesService } from '@services';

type DeleteCourseButtonProps = { id: string };
export const DeleteCourseButton: FC<DeleteCourseButtonProps> = ({ id }) => {
  const [isLoading, withLoading] = useWithLoading();

  const onDelete = async () => {
    await withMessage(MESSAGE_KEYS.COURSE_DELETE, withLoading(CoursesService.delete(id)));
  };

  return (
    <Tooltip title='Navigate to course info page'>
      <Button
        key='delete'
        icon={<DeleteFilled />}
        loading={isLoading}
        shape='circle'
        type='primary'
        onClick={() => {
          Modal.confirm({
            title: 'Delete course',
            content: 'Are you sure you want to delete this course?',
            onOk: onDelete,
          });
        }}
      />
    </Tooltip>
  );
};
