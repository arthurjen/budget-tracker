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

describe('expenses reducers', () => {

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

  it('adds an expense', () => {
    const payload = { categoryId: 'abc123' };

    const _state = {
      'abc123': [{}],
      'def456': [{}]
    };

    const expectedState = {
      'abc123': [{}, { categoryId: 'abc123' }],
      'def456': [{}]
    };


    const state = expensesByCategory(_state, {
      type: EXPENSE_ADD,
      payload
    });

    expect(state).toEqual(expectedState);
  });

  it('updates an expense', () => {
    const payload = {
      id: 'a',
      categoryId: 'abc123',
      name: 'updated'
    };

    const _state = {
      'abc123': [
        {
          id: 'a',
          categoryId: 'abc123',
          name: 'test'
        },
        {
          id: 'b',
          categoryId: 'abc123',
          name: 'testo'
        }
      ],
      'def456': [{}]
    };

    const expectedState = {
      'abc123': [
        {
          id: 'a',
          categoryId: 'abc123',
          name: 'updated'
        },
        {
          id: 'b',
          categoryId: 'abc123',
          name: 'testo'
        }
      ],
      'def456': [{}]
    };

    const state = expensesByCategory(_state, {
      type: EXPENSE_UPDATE,
      payload
    });

    expect(state).toEqual(expectedState);
  });

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