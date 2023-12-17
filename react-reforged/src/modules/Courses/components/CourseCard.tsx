import { DeleteFilled, EditFilled, FileTextFilled } from '@ant-design/icons';
import { Button, Card, Tag, Typography } from 'antd';
import { FC } from 'react';

import { ICourse } from '@models/Course';

const { Title, Text } = Typography;

type ActionProps = { shape: 'circle'; size: 'large'; type: 'primary' };
const actionStyleProps: ActionProps = { shape: 'circle', size: 'large', type: 'primary' };

type CourseCardProps = {
  course: ICourse;
};

export const CourseCard: FC<CourseCardProps> = ({ course }) => {
  return (
    <article>
      <Card
        actions={[
          <Button key='delete' icon={<DeleteFilled />} {...actionStyleProps} />,
          <Button key='edit' icon={<EditFilled />} {...actionStyleProps} />,
          <Button key='info' icon={<FileTextFilled />} {...actionStyleProps} />,
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
