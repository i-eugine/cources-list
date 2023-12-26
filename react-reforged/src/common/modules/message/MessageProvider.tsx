import { message } from 'antd';

export const MessageProvider = ({ children }: { children: React.ReactNode }) => {
  const [_, contextHolder] = message.useMessage();
  return (
    <>
      {children}
      {contextHolder}
    </>
  );
};
