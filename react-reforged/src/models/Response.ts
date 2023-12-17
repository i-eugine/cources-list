// todo: rewrite this interface to type

export type IResponse<T> = {
  successful: boolean;
  result: T;
};
