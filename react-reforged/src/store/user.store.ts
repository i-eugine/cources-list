import { action, observable, reaction } from 'mobx';

import { LoginRequest, User } from '@models';
import { AuthService } from '@services';

import { TokenManager } from './token-manager';

class UserStore {
  @observable accessor user: User | null = null;

  constructor() {
    reaction(
      () => this.user,
      (user) => !user && TokenManager.removeToken()
    );
  }

  @action.bound async login(data: LoginRequest) {
    const resp = await AuthService.login(data);

    TokenManager.setToken(resp.data.result);
    this.user = resp.data.user;
  }

  @action.bound async fetchUser() {
    const resp = await AuthService.me();
    this.user = resp.data.result;
  }

  @action.bound logoutUser() {
    this.user = null;
  }
}

export const userStore = new UserStore();
