jest.mock('../../services/categoriesApi', () => ({
  addExpense: jest.fn(),
  updateExpense: jest.fn(),
  removeExpense: jest.fn()
}));

import { add, update, remove } from './actions';
import { EXPENSE_ADD, EXPENSE_UPDATE, EXPENSE_REMOVE } from './reducers';
import { addExpense, updateExpense, removeExpense } from '../../services/categoriesApi';

describe('expenses actions', () => {


  it('adds a expense', () => {
    const expense = { name: 'gas' };
    const promise = Promise.resolve();
    addExpense.mockReturnValueOnce(promise);

    const { type, payload } = add(expense);
    expect(type).toBe(EXPENSE_ADD);
    expect(payload).toBe(promise);
    expect(addExpense.mock.calls.length).toBe(1);
    expect(addExpense.mock.calls[0][0]).toBe(expense);
  });

  it('updates a expense', () => {
    const expense = { name: 'gas' };
    const promise = Promise.resolve();
    updateExpense.mockReturnValueOnce(promise);

    const { type, payload } = update(expense);
    expect(type).toBe(EXPENSE_UPDATE);
    expect(payload).toBe(promise);
    expect(updateExpense.mock.calls.length).toBe(1);
    expect(updateExpense.mock.calls[0][0]).toBe(expense);
  });
  
  it('removes a expense', () => {
    const promise = Promise.resolve();
    removeExpense.mockReturnValueOnce(promise);
    const expense = { id: 'abc123' };

    const { type, payload } = remove(expense);
    expect(type).toBe(EXPENSE_REMOVE);
    expect(removeExpense.mock.calls.length).toBe(1);
    expect(removeExpense.mock.calls[0][0]).toBe(expense);

    return payload.then(expenseToDelete => {
      expect(expenseToDelete).toBe(expense);
    });
  });
});
