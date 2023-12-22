export const getHref = (...parts: (string | number)[]): string => {
  return `/${parts.join('/')}`;
};
