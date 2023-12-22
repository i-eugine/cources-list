import { DeleteFilled, EditFilled, FileTextFilled } from '@ant-design/icons';
import { Button, Card, Tag, Typography } from 'antd';
import { FC } from 'react';
import { Link } from 'react-router-dom';

import { Course } from '@models';
import { ROUTES } from '@routing/routes';
import { getHref } from '@utils/get-href';

const { Title, Text } = Typography;

type ActionProps = { shape: 'circle'; size: 'large'; type: 'primary' };
const actionStyleProps: ActionProps = { shape: 'circle', size: 'large', type: 'primary' };

type CourseCardProps = {
  course: Course;
};

const getCardNavs = (id: string) =>
  [
    { key: 'edit', icon: <EditFilled />, href: getHref(ROUTES.courses, id, ROUTES.edit) },
    { key: 'info', icon: <FileTextFilled />, href: getHref(ROUTES.courses, id) },
  ].map((nav) => (
    <Link to={nav.href}>
      <Button key={nav.key} icon={nav.icon} {...actionStyleProps} />
    </Link>
  ));

export const CourseCard: FC<CourseCardProps> = ({ course }) => {
  return (
    <article>
      <Card
        actions={[
          <Button key='delete' icon={<DeleteFilled />} {...actionStyleProps} />,
          ...getCardNavs(course.id),
        ]}
      >
        <div className='flex flex-col gap-3'>
          <header>
            <Title level={4}>{course.title}</Title>

            <div>
              <Text className='mr-2' strong>
                Authors:
              </Text>
              <Text>
                {course.authors.map(({ name }) => (
                  <Tag>{name}</Tag>
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
