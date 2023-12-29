import { Typography } from 'antd';

const { Title } = Typography;

type UserPageProps = {
  children: React.ReactNode;
  title: string;
};

const dimentionsClass = 'h-full w-full xl:w-[768px] pb-16 m-auto';
const alignCenterClass = 'flex flex-col align-center justify-center';

export const UserPage: React.FC<UserPageProps> = ({ title, children }) => (
  <div className={`${dimentionsClass} ${alignCenterClass}`}>
    <Title className='text-center' level={2}>
      {title}
    </Title>
    {children}
  </div>
);
