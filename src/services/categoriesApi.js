import { put, post, get, del } from './request';

const URL = 'https://mysticaltutor-e1723.firebaseio.com';
const CATEGORIES_URL = `${URL}/categories`;

const getCategoryUrl = key => `${CATEGORIES_URL}/${key}.json`;
const getExpenseUrl = key => `${CATEGORIES_URL}/${key}/expenses`;

export const loadCategories = () => {
  return get(`${CATEGORIES_URL}.json`)
    .then(response => {
      return response
        ? Object.keys(response).map(key => {
          const each = response[key];
          each.id = key;
          return each;
        })
        : [];
    });
};

export const addCategory = category => {
  const url = `${CATEGORIES_URL}.json`;
  return post(url, category)
    .then(res => { 
      // category.id = res.name;
      return { ...category, id: res.name };
    });
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
  const expenseUrl = getExpenseUrl(expense.categoryId);
  const url = `${expenseUrl}.json`;
  return post(url, expense)
    .then(res => {
      expense.id = res.name;
      return expense;
    });
};

// export const updateCategory = expense => {
//   const { id, ...copy } = expense;
//   const url = getCategoryUrl(id);
//   return put(url, copy);
// };

// export const removeCategory = id => {
//   const url = getCategoryUrl(id);
//   return del(url);
// };