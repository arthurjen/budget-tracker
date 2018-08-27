export const EXPENSE_ADD = 'EXPENSE_ADD';
export const EXPENSE_UPDATE = 'EXPENSE_UPDATE';
export const EXPENSE_REMOVE = 'EXPENSE_REMOVE';

export const getExpenses = state => state.expensesByCategory;

export function expensesByCategory(state = [], { type, payload }) {
  switch(type) {
    case EXPENSE_ADD:
      return [...state, payload];
    case EXPENSE_UPDATE:
      return state.map(c => c.key === payload.key ? payload : c);
    case EXPENSE_REMOVE:
      return state.filter(c => c.key !== payload);
    default:
      return state;
  }
}