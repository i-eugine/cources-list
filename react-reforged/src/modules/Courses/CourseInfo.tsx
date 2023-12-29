import { Card, Tag, Typography } from 'antd';
import { observer } from 'mobx-react-lite';

import { NotFoundPage, BackButton } from '@components';

import { useSelectedCourse } from './hooks/useSelectedCourse.hook';

const { Title, Text } = Typography;

export const CourseInfo: React.FC = observer(function CourseInfo() {
  const course = useSelectedCourse();

  if (!course) {
    return <NotFoundPage />;
  }

  return (
    <div className='max-w-screen-lg m-auto'>
      <Title level={2}>{course.title}</Title>

      <Card>
        <div className='flex gap-5'>
          <div className='flex-auto'>
            <Title level={5}>Description:</Title>
            <Text>{course.description}</Text>
          </div>

          <div className='min-w-[22rem] -my-5'>
            {[
              { label: 'ID:', value: course.id },
              {
                label: 'Duration:',
                value: (
                  <>
                    <Text strong>{course.duration}</Text> hours
                  </>
                ),
              },
              { label: 'Created:', value: course.creationDate },
              {
                label: 'Authors:',
                value: course.authors.map(({ name, id }) => <Tag key={id}>{name}</Tag>),
              },
            ].map(({ label, value }, i) => (
              <div key={i} className='my-5'>
                <Text className='inline-block w-16' strong>
                  {label}
                </Text>
                <Text>{value}</Text>
              </div>
            ))}
          </div>
        </div>
      </Card>
      <div className='flex justify-end mt-5'>
        <BackButton />
      </div>
    </div>
  );
});
