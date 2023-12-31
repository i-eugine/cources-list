import { ConfigProvider, Layout } from 'antd';
import { Outlet } from 'react-router-dom';

import { BreakpointsProvider } from '@common-modules/breakpoints';
import { MessageProvider } from '@common-modules/message';
import { Header } from '@components';
import { useMediaQuery } from '@hooks/useMediaQuery';

export const AppLayout: React.FC = () => {
  const isLarge = useMediaQuery('(min-width: 640px)');

  return (
    <BreakpointsProvider isLarge={isLarge}>
      <MessageProvider>
        <ConfigProvider componentSize={isLarge ? 'large' : 'middle'}>
          <Layout className='h-screen overflow-hidden'>
            <Header />
            <Layout.Content className='w-full m-auto py-5 sm:pt-10 overflow-auto px-5 sm:px-10'>
              <div className='sm:w-11/12 h-full m-auto pb-10'>
                <Outlet />
              </div>
            </Layout.Content>
          </Layout>
        </ConfigProvider>
      </MessageProvider>
    </BreakpointsProvider>
  );
};
