import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CategoryItem extends Component {
  static propTypes = {
    category: PropTypes.object.isRequired
  };

  render() { 
    const { name, budget } = this.props.category;

    return (
      <div>
        <h4>{name}</h4>
        <p>{budget}</p>
      </div>
    );
  }
}
 
export default CategoryItem;