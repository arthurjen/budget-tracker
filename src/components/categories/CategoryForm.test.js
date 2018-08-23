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

  it.skip('renders edit if passed a category prop', () => {
    const handleComplete = jest.fn();
    const promise = Promise.resolve();
    handleComplete.mockReturnValueOnce(promise);
    const handleCancel = jest.fn();

    const note = {
      key: 'asdf',
      title: 'test title',
      content: 'test content',
      completed: false
    };

    const wrapper = mount(<CategoryForm
      onComplete={handleComplete}
      onCancel={handleCancel}
      note={note}
    />);

    wrapper.find('textarea').simulate('change', {
      target: {
        name: 'content',
        value: 'updated content'
      }
    });

    wrapper.find('button[type="submit"]').simulate('submit');

    const calls = handleComplete.mock.calls;
    expect(calls.length).toBe(1);
    expect(calls[0][0]).toEqual({
      ...note,
      content: 'updated content'
    });

    
  });
});