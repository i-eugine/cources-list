import axios from 'axios';

import { MESSAGE_KEYS, withMessage } from '@common-modules/message';
import { Resp, Author } from '@models';

import { API_URL } from './api.config';

const authorsUrl = `${API_URL}/authors`;

export class AuthorsService {
  static all() {
    return axios.get<Resp<Author[]>>(`${authorsUrl}/all`);
  }

  static get(id: string) {
    return axios.get<Resp<Author>>(`${authorsUrl}/${id}`);
  }

  @withMessage(MESSAGE_KEYS.AUTHOR_CREATE)
  static create(name: string) {
    return axios.post<Resp<Author>>(`${authorsUrl}/add`, { name });
  }

  @withMessage(MESSAGE_KEYS.AUTHOR_DELETE)
  static delete(id: string) {
    return axios.delete<Resp<Author>>(`${authorsUrl}/${id}`, {});
  }
}
