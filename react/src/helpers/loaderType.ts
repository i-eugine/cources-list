// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type LoaderType<T extends (...args: any) => any> = Awaited<
	ReturnType<T>
>;
