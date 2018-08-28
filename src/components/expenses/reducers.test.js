import {
  expensesByCategory,
  EXPENSE_ADD,
  EXPENSE_UPDATE,
  EXPENSE_REMOVE
} from './reducers';
import {
  CATEGORY_LOAD,
  CATEGORY_ADD,
  CATEGORY_REMOVE
} from '../categories/reducers';

describe('categories reducers', () => {

  it('initializes to empty object', () => {
    const state = expensesByCategory(undefined, {});
    expect(state).toEqual({});
  });

  it('loads expenses', () => {
    const payload = [
      { expenses: [], id: 'abc123' },
      { expenses: [], id: 'def456' },
      { expenses: [], id: 'ghi789' }
    ];

    const expectedState = {
      abc123: [],
      def456: [],
      ghi789: []
    };

    const state = expensesByCategory({}, {
      type: CATEGORY_LOAD,
      payload
    });

    expect(state).toEqual(expectedState);
  });

  // it('adds a category', () => {
  //   const a = { name: 'a' };
  //   const b = { name: 'b' };
  //   const c = { name: 'c' };

  //   const state = categories([a, b], {
  //     type: EXPENSE_ADD,
  //     payload: c
  //   });

  //   expect(state).toEqual([a, b, c]);
  // });

  // it('updates a category', () => {
  //   const a = { id: '1', name: 'a' };
  //   const b = { id: '2', name: 'b' };
  //   const c = { id: '3', name: 'c' };

  //   const updated = { id: '2', name: 'd' };

  //   const state = categories([a, b, c], {
  //     type: EXPENSE_UPDATE,
  //     payload: updated
  //   });

  //   expect(state).toEqual([a, updated, c]);
  // });

  // it('removes a category', () => {
  //   const a = { id: '1', name: 'a' };
  //   const b = { id: '2', name: 'b' };
  //   const c = { id: '3', name: 'c' };

  //   const state = categories([a, b, c], {
  //     type: EXPENSE_REMOVE,
  //     payload: '1'
  //   });

  //   expect(state).toEqual([b, c]);
  // });
});