import { createStore, combineReducers } from 'redux';
import { categories } from './components/categories/reducers';
import { expensesByCategory } from './components/expenses/reducers';

const rootReducer = combineReducers({
  categories,
  expensesByCategory
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;