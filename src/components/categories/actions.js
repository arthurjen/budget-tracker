import {
  CATEGORY_LOAD,
  CATEGORY_ADD,
  CATEGORY_UPDATE,
  CATEGORY_REMOVE
} from './reducers';
import data from './categories-data';
import shortid from 'shortid';

export const load = () => ({
  type: CATEGORY_LOAD,
  payload: data
});

export const add = category => {
  category.id = shortid.generate();
  category.timestamp = (new Date()).toLocaleString();
  console.log(typeof category.timestamp);
  return {
    type: CATEGORY_ADD,
    payload: category
  };
};

export const update = category => ({
  type: CATEGORY_UPDATE,
  payload: category
});

export const remove = id => ({
  type: CATEGORY_REMOVE,
  payload: id
});

