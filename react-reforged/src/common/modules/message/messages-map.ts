import { MESSAGE_KEYS } from './message-keys.enum';

export const MessagesMap = {
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
