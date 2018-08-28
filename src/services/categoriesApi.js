import { put, post, get, del } from './request';

const URL = 'https://mysticaltutor-e1723.firebaseio.com';
const CATEGORIES_URL = `${URL}/categories`;

const getCategoryUrl = key => `${CATEGORIES_URL}/${key}.json`;
const getExpenseUrl = key => `${CATEGORIES_URL}/${key}/expenses`;

const arrayify = obj => {
  return obj
    ? Object.keys(obj).map((key => {
      const each = obj[key];
      each.id = key;
      return each;
    }))
    : [];
};

export const loadCategories = () => {
  return get(`${CATEGORIES_URL}.json`)
    .then(response => {
      const categories = arrayify(response);
      categories.forEach(category => category.expenses = arrayify(category.expenses));
      return categories;
    });
};

export const addCategory = category => {
  const url = `${CATEGORIES_URL}.json`;
  return post(url, category)
    .then(res => ({ ...category, id: res.name }));
};

export const updateCategory = category => {
  const { id, ...copy } = category;
  const url = getCategoryUrl(id);
  return put(url, copy)
    .then(res => {
      res.id = id;
      return res;
    });
};

export const removeCategory = id => {
  const url = getCategoryUrl(id);
  return del(url);
};






export const addExpense = expense => {
  const url = `${getExpenseUrl(expense.categoryId)}.json`;
  return post(url, expense)
    .then(res => {
      expense.id = res.name;
      return expense;
    });
};

export const updateExpense = expense => {
  const { id, ...copy } = expense;
  const url = `${getExpenseUrl(copy.categoryId)}/${id}.json`;
  return put(url, copy)
    .then(res => {
      res.id = id;
      return res;
    });
};

export const removeExpense = expense => {
  const { categoryId, id } = expense;
  const url = `${getExpenseUrl(categoryId)}/${id}.json`;
  return del(url);
};