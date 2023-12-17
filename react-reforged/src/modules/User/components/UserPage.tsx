import { Typography } from 'antd';
import { FC } from 'react';

const { Title } = Typography;

type UserPageProps = {
  children: React.ReactNode;
  title: string;
};

export const UserPage: FC<UserPageProps> = ({ title, children }) => (
  <div>
    <Title className='text-center' level={2}>
      {title}
    </Title>
    {children}
  </div>
);
