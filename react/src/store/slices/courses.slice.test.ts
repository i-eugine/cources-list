import reducer from './courses.slice';

describe('courses.slice', () => {
  test('should return the initial state', () => {
    expect(reducer(undefined, { type: undefined })).toEqual({ entities: {}, ids: [] });
  });
});
