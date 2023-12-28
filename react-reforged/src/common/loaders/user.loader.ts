import { AuthService } from '@services';
import { setUser, user } from '@store/signals';

export const userLoader = async () => {
  if (user.value) {
    return;
  }

  const resp = await AuthService.me();
  setUser(resp.data.result);
};
