import { action, computed, observable } from 'mobx';

import { MESSAGE_KEYS, withMessage } from '@common-modules/message';
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

  @action.bound addAuthor(author: Author) {
    this.authors = [...this.authors, author];
  }

  @action.bound async deleteAuthor(id: string) {
    await withMessage(MESSAGE_KEYS.AUTHOR_DELETE, AuthorsService.delete(id));
    this.authors = this.authors.filter((c) => c.id !== id);
  }
}

export const authorsStore = new AuthorsStore();
