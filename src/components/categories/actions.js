import {
  CATEGORY_LOAD,
  CATEGORY_ADD,
  CATEGORY_UPDATE,
  CATEGORY_REMOVE
} from './reducers';
import { 
  loadCategories,
  addCategory,
  updateCategory,
  removeCategory
} from '../../services/categoriesApi';

export const load = () => ({
  type: CATEGORY_LOAD,
  payload: loadCategories()
});

export const add = category => {
  category.timestamp = (new Date()).toLocaleString();
  category.expenses = [];
  return {
    type: CATEGORY_ADD,
    payload: addCategory(category)
  };
};

export const update = category => ({
  type: CATEGORY_UPDATE,
  payload: updateCategory(category)
});

export const remove = id => ({
  type: CATEGORY_REMOVE,
  payload: removeCategory(id).then(() => id)
});

