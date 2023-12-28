import { EditFilled, FileTextFilled } from '@ant-design/icons';
import { Button, Card, Tag, Tooltip, Typography } from 'antd';
import { Link } from 'react-router-dom';

import { Course } from '@models';
import { ROUTES } from '@routing/routes';
import { getHref } from '@utils/get-href';

import { DeleteCourseButton } from './DeleteCourseButton';

const { Title, Text } = Typography;

type CourseCardProps = {
  course: Course;
};

const getCardNavs = (id: string) =>
  [
    { key: 'edit', icon: <EditFilled />, href: getHref(ROUTES.courses, id, ROUTES.edit) },
    { key: 'info', icon: <FileTextFilled />, href: getHref(ROUTES.courses, id) },
  ].map((nav) => (
    <Tooltip key={nav.key} title={`Navigate to course ${nav.key} page`}>
      <Link to={nav.href}>
        <Button icon={nav.icon} shape='circle' type='primary' />
      </Link>
    </Tooltip>
  ));

export const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <article>
      <Card
        actions={[<DeleteCourseButton key='delete' id={course.id} />, ...getCardNavs(course.id)]}
      >
        <div className='flex flex-col gap-3'>
          <header>
            <Title level={4}>{course.title}</Title>

            <div>
              <Text className='mr-2' strong>
                Authors:
              </Text>
              <Text>
                {course.authors.map(({ name, id }) => (
                  <Tag key={id}>{name}</Tag>
                ))}
              </Text>
            </div>
          </header>

          <Text>{course.description}</Text>

          <div className='flex'>
            <div className='flex-1'>
              <Text className='mr-2' strong>
                Created:
              </Text>
              <Text>{course.creationDate}</Text>
            </div>

            <div className='flex-1'>
              <Text className='mr-2' strong>
                Duration:
              </Text>
              <Text>
                <Text strong>{course.duration}</Text> hours
              </Text>
            </div>
          </div>
        </div>
      </Card>
    </article>
  );
};
