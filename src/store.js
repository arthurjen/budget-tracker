import { createStore } from 'redux';
import { categories } from './components/categories/reducers';

const store = createStore(
  categories,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;