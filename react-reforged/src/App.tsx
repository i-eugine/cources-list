import { ConfigProvider, Layout } from 'antd';
import { Header, Content } from 'antd/es/layout/layout';

function App() {
  return (
    <>
      <Layout className='h-screen overflow-hidden'>
        <Header>Header</Header>
        <Content className='w-full m-auto p-10 overflow-auto'>
          <div className='w-11/12 m-auto'>
            <ConfigProvider componentSize='large'>Content with large component size</ConfigProvider>
          </div>
        </Content>
      </Layout>
    </>
  );
}

export default App;
