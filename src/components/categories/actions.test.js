import { add, load, update, remove } from './actions';
import { CATEGORY_ADD, CATEGORY_LOAD, CATEGORY_UPDATE, CATEGORY_REMOVE } from './reducers';
describe('categories actions', () => {
  it('adds a category', () => {
    const category = {
      name: 'Test Category',
      budget: 666,
    };
    const data = add(category);
    expect(data).toEqual({
      type: 'CATEGORY_ADD',
      payload: category
    });
    expect(data.payload.key).toBeDefined();
    expect(data.payload.timestamp).toBeDefined();
  });

  it('loads categories', () => {

  });
});
