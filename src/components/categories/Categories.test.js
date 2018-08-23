import React from 'react';
import { shallow } from 'enzyme';
import Categories from './Categories';
import toJSON from 'enzyme-to-json';

describe('Categories', () => {
  it.skip('renders categories', () => {
    const categories = [
      { key: '1', name: 'a' },
      { key: '2', name: 'b' },
      { key: '3', name: 'c' }
    ];

    const wrapper = shallow(
      <Categories categories={categories} />
    );

    expect(toJSON(wrapper)).toMatchSnapshot();
  });

});