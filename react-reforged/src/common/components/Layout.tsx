import { ConfigProvider, Layout } from 'antd';
import { Outlet } from 'react-router-dom';

import { MessageProvider } from '@common/modules/message';

import { Header } from './Header';

export const AppLayout = () => {
  return (
    <MessageProvider>
      <ConfigProvider componentSize='large'>
        <Layout className='h-screen overflow-hidden'>
          <Header />
          <Layout.Content className='w-full m-auto mt-5 sm:mt-10 overflow-auto px-5 sm:px-10'>
            <div className='sm:w-11/12 h-full m-auto pb-10'>
              <Outlet />
            </div>
          </Layout.Content>
        </Layout>
      </ConfigProvider>
    </MessageProvider>
  );
};
