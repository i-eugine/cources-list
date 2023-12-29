import { DeleteButton } from '@components';
import { coursesStore } from '@store/courses.store';

type DeleteCourseButtonProps = { id: string };
export const DeleteCourseButton: React.FC<DeleteCourseButtonProps> = ({ id }) => {
  const { deleteCourse } = coursesStore;

  const onDelete = async () => {
    deleteCourse(id);
  };

  return <DeleteButton entityName='course' onDelete={onDelete} />;
};
