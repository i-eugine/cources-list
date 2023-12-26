import axios from 'axios';

import { Resp, Author } from '@models';

import { API_URL } from './api.config';

const authorsUrl = `${API_URL}/authors`;

export const AuthorsService = {
  all: () => axios.get<Resp<Author[]>>(`${authorsUrl}/all`),
  get: (id: string) => axios.get<Resp<Author>>(`${authorsUrl}/${id}`),
  create: (name: string) => axios.post<Resp<Author>>(`${authorsUrl}/add`, { name }),
  delete: (id: string) => axios.delete<Resp<Author>>(`${authorsUrl}/${id}`, {}),
};
