import CategoryForm from './CategoryForm';
import React from 'react';
import { mount } from 'enzyme';
import toJSON from 'enzyme-to-json';

describe('Category Form', () => {

  it('renders add if no category prop', () => {
    const add = jest.fn();
    const promise = Promise.resolve();
    add.mockReturnValueOnce(promise);

    const wrapper = mount(<CategoryForm onComplete={add}/>);
    expect(toJSON(wrapper)).toMatchSnapshot();

    const category = {
      name: 'Test Category',
      budget: 666,
    };

    wrapper.find('input[name="name"]').simulate('change', {
      target: {
        name: 'name',
        value: category.name
      }
    });

    wrapper.find('input[name="budget"]').simulate('change', {
      target: {
        name: 'budget',
        value: category.budget
      }
    });

    wrapper.find('button').simulate('submit');

    const calls = add.mock.calls;
    expect(calls.length).toBe(1);
    expect(calls[0][0]).toEqual(category);

    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('renders edit if passed a category prop', () => {
    const update = jest.fn();
    const promise = Promise.resolve();
    update.mockReturnValueOnce(promise);
    const toggleEdit = jest.fn();

    const category = {
      id: '123456',
      name: 'Test Category',
      budget: 666,
      timestamp: 'test date'
    };

    const wrapper = mount(<CategoryForm
      onComplete={update}
      onCancel={toggleEdit}
      category={category}
    />);

    wrapper.find('input[name="budget"]').simulate('change', {
      target: {
        name: 'budget',
        value: 999
      }
    });

    wrapper.find('button[type="submit"]').simulate('submit');

    const calls = update.mock.calls;
    expect(calls.length).toBe(1);
    expect(calls[0][0]).toEqual({
      ...category,
      budget: 999
    });

    
  });
});