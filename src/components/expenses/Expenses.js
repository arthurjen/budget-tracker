import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Expense from './Expense.js';
import ExpenseForm from './ExpenseForm.js';
import { getExpensesByCategoryId } from './reducers';
import { connect } from 'react-redux';
import { load, add } from './actions';

class Expenses extends PureComponent {

  static propTypes = {
    expenses: PropTypes.array.isRequired,
    categoryId: PropTypes.string.isRequired,
    load: PropTypes.func.isRequired,
    add: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.load();
  }

  render() { 
    const { expenses, add, categoryId } = this.props;
    return (
      <div>
        <ExpenseForm categoryId={categoryId} onComplete={add}/>
        <ul>
          {expenses.map(expense => (
            <Expense
              key={expense.id}
              expense={expense}
            />
          ))}
        </ul>
      </div>
    );
  }
}
 
export default connect(
  (state, { categoryId }) => ({ expenses: getExpensesByCategoryId(state, categoryId) }),
  { load, add }
)(Expenses);