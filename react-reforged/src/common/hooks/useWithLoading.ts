import { useState } from 'react';

type WithLoadingFn = <T>(fnPromise: Promise<T>) => Promise<T>;

export const useWithLoading = (): [boolean, WithLoadingFn] => {
  const [loading, setLoading] = useState(false);

  const withLoading: WithLoadingFn = async (fnPromise) => {
    setLoading(true);
    const resp = await fnPromise;
    setLoading(false);
    return resp;
  };

  return [loading, withLoading];
};
