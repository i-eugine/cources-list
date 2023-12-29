import { action, observable, reaction } from 'mobx';

import { User } from '@models';

import { TokenManager } from './token-manager';

class UserStore {
  @observable accessor user: User | null = null;

  constructor() {
    reaction(
      () => this.user,
      (user) => !user && TokenManager.removeToken()
    );
  }

  @action.bound setUser(u: User | null) {
    this.user = u;
    console.log(this.user);
  }

  @action.bound logoutUser() {
    this.user = null;
  }
}
export const userStore = new UserStore();

(window as any).userStore = userStore;
