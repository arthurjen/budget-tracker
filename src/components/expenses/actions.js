import {
  EXPENSE_ADD,
  EXPENSE_UPDATE,
  EXPENSE_REMOVE
} from './reducers';

import { loadCategories } from '../../services/categoriesApi';

import CATEGORY_LOAD from '../categories/reducers';

export const load = () => ({
  type: CATEGORY_LOAD,
  payload: loadCategories()
});


export const add = expense => {
  expense.timestamp = (new Date()).toLocaleString();
  return {
    type: EXPENSE_ADD,
    payload: expense
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

