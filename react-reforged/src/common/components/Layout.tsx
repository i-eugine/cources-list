import { Layout } from 'antd';
import { Outlet } from 'react-router';

export const AppLayout = () => {
  return (
    <Layout className='h-screen overflow-hidden'>
      {/*  todo add header */}
      <Layout.Header>Header</Layout.Header>
      <Layout.Content className='w-full m-auto p-10 overflow-auto'>
        <div className='w-11/12 m-auto'>
          <Outlet />
        </div>
      </Layout.Content>
    </Layout>
  );
};
