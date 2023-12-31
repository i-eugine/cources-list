import { Button, Typography } from 'antd';
import { Link } from 'react-router-dom';

import { AppHelmet } from '@components';
import { ROUTES } from '@routing/routes';
import { getHref } from '@utils/get-href';

const { Title, Text } = Typography;

export const EmptyCourseList: React.FC = () => {
  return (
    <div>
      <AppHelmet description='There is no courses right now' title='Empty Course List' />
      <Title level={3}>Your List Is Empty</Title>
      <Text className='mb-5 mt-10'>
        Please use ’Add New Course’ button to add your first course
      </Text>
      <Link to={getHref(ROUTES.courses, ROUTES.create)}>
        <Button>ADD NEW COURSE</Button>
      </Link>
    </div>
  );
};
