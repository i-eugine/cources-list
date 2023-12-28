import { useState } from 'react';

type WithLoadingFn = <T>(fnPromise: Promise<T>) => Promise<T>;

export const useWithLoading = (): [boolean, WithLoadingFn] => {
  const [loading, setLoading] = useState(false);

  const withLoading: WithLoadingFn = async (fnPromise) => {
    try {
      setLoading(true);
      return await fnPromise;
    } finally {
      setLoading(false);
    }
  };

  return [loading, withLoading];
};
