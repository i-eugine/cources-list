import { message } from 'antd';

import { MESSAGE_KEYS } from './message-keys.enum';

const MessagesMap = {
  [MESSAGE_KEYS.AUTHOR_CREATE]: {
    loading: 'Loading authors...',
    success: 'Authors has been saved',
    error: 'Error while saving authors',
  },

  [MESSAGE_KEYS.AUTHOR_DELETE]: {
    loading: 'Deleting authors...',
    success: 'Authors has been deleted',
    error: 'Error while deleting authors',
  },

  [MESSAGE_KEYS.COURSE_DELETE]: {
    loading: 'Deleting course...',
    success: 'Course has been deleted',
    error: 'Error while deleting course',
  },

  [MESSAGE_KEYS.COURSE_SAVE]: {
    loading: 'Saving course...',
    success: 'Course has been saved',
    error: 'Error while saving course',
  },

  [MESSAGE_KEYS.USER_LOGIN]: {
    loading: 'Logging in...',
    success: 'Logged in',
    error: 'Error while logging in',
  },

  [MESSAGE_KEYS.USER_REGISTER]: {
    loading: 'Registering user...',
    success: 'User has been registered',
    error: 'Error while registering user',
  },
};

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
