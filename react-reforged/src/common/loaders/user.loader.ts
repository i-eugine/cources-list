import { userStore } from '@store/user.store';

export const userLoader = async () => {
  const { user, fetchUser } = userStore;
  if (user) {
    return;
  }

  await fetchUser();
};
