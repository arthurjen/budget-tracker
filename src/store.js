import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { categories } from './components/categories/reducers';
import { expensesByCategory } from './components/expenses/reducers';

const rootReducer = combineReducers({
  categories,
  expensesByCategory
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(
    )
  )
);

export default store;