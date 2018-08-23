import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class CategoryItem extends PureComponent {
  static propTypes = {
    category: PropTypes.object.isRequired,
    onEdit: PropTypes.func.isRequired,
  };

  render() { 
    const { category, onEdit } = this.props;
    const { name, budget } = category;

    return (
      <div>
        <h4>{name}</h4>
        <p>{budget}</p>
        <button onClick={onEdit}>Edit</button>
      </div>
    );
  }
}
 
export default CategoryItem;