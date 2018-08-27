import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class ExpenseItem extends PureComponent {
  static propTypes = {
    expense: PropTypes.object.isRequired,
    onEdit: PropTypes.func.isRequired,
  };

  render() { 
    const { expense, onEdit } = this.props;
    const { name, cost } = expense;

    return (
      <div>
        <h6>{name}</h6>
        <p>{cost}</p>
        <button onClick={onEdit}>Edit</button>
      </div>
    );
  }
}
 
export default ExpenseItem;