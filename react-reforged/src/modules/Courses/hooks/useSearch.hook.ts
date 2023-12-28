import { useSearchParams } from 'react-router-dom';

export const useSearch = (): [string, (search: string) => void] => {
  const [params, setParams] = useSearchParams();
  const handleSearch = (search: string) => setParams({ search });

  return [params.get('search') || '', handleSearch];
};
