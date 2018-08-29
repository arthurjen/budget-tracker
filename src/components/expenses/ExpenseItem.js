import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './expenseItem.css';



class ExpenseItem extends PureComponent {
  static propTypes = {
    expense: PropTypes.object.isRequired,
    onEdit: PropTypes.func.isRequired
  };

  render() { 
    const { expense, onEdit } = this.props;
    const { name, cost, timestamp } = expense;

    return (
      <div onClick={onEdit} className={styles.expenseItem}>
        <span className="timestamp">{timestamp}</span>
        <section>
          <h5>{name}</h5>
          <p>{cost}</p>
        </section>
      </div>
    );
  }
}
 
export default ExpenseItem;