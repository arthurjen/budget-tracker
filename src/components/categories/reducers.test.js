import {
  categories,
  CATEGORY_LOAD,
  CATEGORY_ADD,
  CATEGORY_UPDATE,
  CATEGORY_REMOVE
} from './reducers';

describe('categories reducers', () => {

  it('initializes to empty array', () => {
    const state = categories(undefined, {});
    expect(state).toEqual([]);
  });

  it('loads categories', () => {
    const payload = [{}, {}, {}];

    const state = categories([], {
      type: CATEGORY_LOAD,
      payload
    });

    expect(state).toBe(payload);
  });

  it('adds a category', () => {
    const a = { name: 'a' };
    const b = { name: 'b' };
    const c = { name: 'c' };

    const state = categories([a, b], {
      type: CATEGORY_ADD,
      payload: c
    });

    expect(state).toEqual([a, b, c]);
  });

  it('updates a category', () => {
    const a = { id: '1', name: 'a' };
    const b = { id: '2', name: 'b' };
    const c = { id: '3', name: 'c' };

    const updated = { id: '2', name: 'd' };

    const state = categories([a, b, c], {
      type: CATEGORY_UPDATE,
      payload: updated
    });

    expect(state).toEqual([a, updated, c]);
  });

  it('removes a category', () => {
    const a = { id: '1', name: 'a' };
    const b = { id: '2', name: 'b' };
    const c = { id: '3', name: 'c' };

    const state = categories([a, b, c], {
      type: CATEGORY_REMOVE,
      payload: '1'
    });

    expect(state).toEqual([b, c]);
  });
});