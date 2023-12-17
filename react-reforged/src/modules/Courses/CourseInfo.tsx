import { Card, Tag, Typography } from 'antd';

const { Title, Text } = Typography;

const course = {
  id: 'id',
  title: 'title',
  description: 'description',
  creationDate: '12/12/12',
  duration: 210,
  authors: [{ name: 'author1' }, { name: 'author2' }],
};

const courseData = [
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
  { label: 'Authors:', value: course.authors.map(({ name }) => <Tag>{name}</Tag>) },
];

const labelStyle: React.CSSProperties = {
  display: 'inline-block',
  width: 120,
};

export const CourseInfo = () => {
  return (
    <div className='max-w-screen-lg m-auto'>
      <Title level={2}>{course.title}</Title>

      <Card>
        <div className='flex gap-5'>
          <div className='flex-auto'>
            <Title level={5}>Description:</Title>
            <Text>{course.duration}</Text>
          </div>

          <div className='w-80 -my-5'>
            {courseData.map(({ label, value }) => (
              <div className='my-5'>
                <Text style={labelStyle} strong>
                  {label}
                </Text>
                <Text>{value}</Text>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
};
