import {
  EXPENSE_ADD,
  EXPENSE_UPDATE,
  EXPENSE_REMOVE
} from './reducers';
import { CATEGORY_LOAD } from '../categories/reducers';
import { loadCategories, addExpense } from '../../services/categoriesApi';

export const load = () => ({
  type: CATEGORY_LOAD,
  payload: loadCategories()
});

export const add = expense => {
  expense.timestamp = (new Date()).toLocaleString();
  return {
    type: EXPENSE_ADD,
    payload: addExpense(expense)
  };
};

export const update = expense => ({
  type: EXPENSE_UPDATE,
  payload: expense
});

export const remove = id => ({
  type: EXPENSE_REMOVE,
  payload: id
});

