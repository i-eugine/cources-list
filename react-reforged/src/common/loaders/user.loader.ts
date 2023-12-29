import { AuthService } from '@services';
import { userStore } from '@store/user.store';

export const userLoader = async () => {
  if (userStore.user) {
    return;
  }

  const resp = await AuthService.me();
  userStore.setUser(resp.data.result);
};
