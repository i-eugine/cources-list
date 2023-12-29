import { message } from 'antd';

import { MESSAGE_KEYS } from './message-keys.enum';
import { MessagesMap } from './messages-map';

/* eslint-disable @typescript-eslint/no-explicit-any */
export const withMessage =
  (key: MESSAGE_KEYS) =>
  (fnPromise: (...args: any) => Promise<any>, _: ClassMethodDecoratorContext) =>
  async (...args: any[]) => {
    message.loading({ key, content: MessagesMap[key].loading });
    try {
      const resp = await fnPromise(...args);
      console.log('this is resp');
      message.success({ key, content: MessagesMap[key].success }, 1);
      return resp;
    } catch (error) {
      message.error({ key, content: MessagesMap[key].error }, 1);
      throw error;
    }
  };
/* eslint-enable @typescript-eslint/no-explicit-any */
