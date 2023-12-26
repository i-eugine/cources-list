import { Resp, User } from '@models';

export type LoginRequest = {
  name?: string | null;
  email: string;
  password: string;
};

export type LoginResponse = Resp<string> & { user: User };
