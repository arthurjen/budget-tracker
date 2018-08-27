import {
  CATEGORY_LOAD,
  EXPENSE_ADD,
  EXPENSE_UPDATE,
  EXPENSE_REMOVE
} from './reducers';
import data from '../categories/categories-data';

import shortid from 'shortid';

export const load = () => ({
  type: CATEGORY_LOAD,
  payload: data
});

export const add = expense => {
  expense.id = shortid.generate();
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

