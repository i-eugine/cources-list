export const mockUseDispatch = jest.fn();
export const mockUseSelector = jest.fn().mockImplementation(() => {
	return true;
});
jest.mock('react-redux', () => {
	const ActualReactRedux = jest.requireActual('react-redux');
	return {
		...ActualReactRedux,
		useDispatch: jest.fn().mockImplementation(() => mockUseDispatch),
		useSelector: jest.fn().mockImplementation(() => mockUseSelector),
	};
});
