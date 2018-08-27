import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Expenses from '../expenses/Expenses';
import styles from './CategoryItem.css';

class CategoryItem extends PureComponent {
  static propTypes = {
    category: PropTypes.object.isRequired,
    onEdit: PropTypes.func.isRequired,
  };

  render() { 
    const { category, onEdit } = this.props;
    const { name, budget, id } = category;

    return (
      <div className={styles.categoryItem}>
        <section>
          <h4>{name}</h4>
          <p>{budget}</p>
          <button onClick={onEdit}>Edit</button>
        </section>
        <Expenses categoryId={id}/>
      </div>
    );
  }
}
 
export default CategoryItem;