export const CATEGORY_LOAD = 'CATEGORY_LOAD';
export const CATEGORY_ADD = 'CATEGORY_ADD';
export const CATEGORY_UPDATE = 'CATEGORY_UPDATE';
export const CATEGORY_REMOVE = 'CATEGORY_REMOVE';

export const getCategories = state => state.categories;

export function categories(state = [], { type, payload }) {
  switch(type) {
    case CATEGORY_LOAD:
      return payload;
    case CATEGORY_ADD:
      return [...state, payload];
    case CATEGORY_UPDATE: {
      return state.map(c => c.id === payload.id ? payload : c);
    }
    case CATEGORY_REMOVE:
      return state.filter(c => c.id !== payload);
    default:
      return state;
  }
}