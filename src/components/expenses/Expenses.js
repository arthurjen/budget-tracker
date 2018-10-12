import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Expense from './Expense.js';
import ExpenseForm from './ExpenseForm.js';
import { getExpensesByCategoryId } from './reducers';
import { connect } from 'react-redux';
import { add } from './actions';
import styles from './Expenses.css';


class Expenses extends PureComponent {

  state = {
    adding: false
  };

  static propTypes = {
    expenses: PropTypes.array.isRequired,
    categoryId: PropTypes.string.isRequired,
    add: PropTypes.func.isRequired
  };

  handleAdd = expense => {
    const { add } = this.props;
    return add(expense)
      .then(() => this.toggleAdding());
  };

  toggleAdding = () => {
    this.setState(({ adding }) => ({ adding: !adding }));
  };

  render() { 
    const { expenses, categoryId } = this.props;
    const { adding } = this.state;

    return (
      <div className={styles.expenses}>
        <section className="expense-form">
          {adding 
            ? <ExpenseForm
              categoryId={categoryId}
              onCancel={this.toggleAdding}
              onComplete={this.handleAdd}
            />
            : <button
              className="toggle-expense-form"
              onClick={this.toggleAdding}
            >
              Add an Expense
            </button>
          }
        </section>
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
  { add }
)(Expenses);