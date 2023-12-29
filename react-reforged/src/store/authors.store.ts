import { action, computed, observable } from 'mobx';

import { Author } from '@models';
import { AuthorsService } from '@services';

class AuthorsStore {
  @observable accessor authors: Author[] = [];

  @computed get transitionData() {
    return this.authors.map((a) => ({ ...a, key: a.id, label: a.name }));
  }

  @action.bound setAuthors(authors: Author[]) {
    this.authors = authors;
  }

  @action.bound async addAuthor(authorName: string) {
    const resp = await AuthorsService.create(authorName);
    this.authors = [...this.authors, resp.data.result];
  }

  @action.bound async deleteAuthor(id: string) {
    await AuthorsService.delete(id);
    this.authors = this.authors.filter((c) => c.id !== id);
  }
}

export const authorsStore = new AuthorsStore();
