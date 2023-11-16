// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Nothing {}
export type Literal<T, U = string> = T | (U & Nothing);
