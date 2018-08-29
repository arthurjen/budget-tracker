import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Expenses from '../expenses/Expenses';
import { connect } from 'react-redux';
import { getTotalExpensesByCategory } from '../expenses/reducers';
import styles from './CategoryItem.css';

class CategoryItem extends PureComponent {
  static propTypes = {
    category: PropTypes.object.isRequired,
    onEdit: PropTypes.func.isRequired,
    total: PropTypes.number
  };

  render() { 
    const { category, total, onEdit } = this.props;
    const { name, budget, id } = category;

    return (
      <div className={styles.categoryItem}>
        <section className="title" onClick={onEdit}>
          <h4>{name}</h4>
          <p>{total} / {budget}</p>
        </section>
        <Expenses categoryId={id}/>
      </div>
    );
  }
}
 
export default connect(
  (state, { category }) => ({ total: getTotalExpensesByCategory(state, category.id) }),
  null
)(CategoryItem);