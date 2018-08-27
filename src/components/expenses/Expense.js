import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ExpenseItem from './ExpenseItem';
import ExpenseForm from './ExpenseForm';
import { update, remove } from './actions';
import styles from './Expense.css';

class Expense extends PureComponent {

  state = {
    editing: false
  };

  static propTypes = {
    expense: PropTypes.object.isRequired,
    update: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
  };

  toggleEdit = () => {
    console.log('toggling');
    this.setState(({ editing }) => ({ editing: !editing }));
  };

  handleComplete = expense => {
    this.props.update(expense);
    this.toggleEdit();
  };

  handleRemove = id => {
    this.props.remove(id);
    this.toggleEdit();
  };

  render() { 
    const { expense } = this.props;
    const { editing } = this.state;

    return (
      <li className={styles.expense}>
        {editing
          ? <ExpenseForm
            categoryId={expense.categoryId}
            expense={expense}
            onComplete={this.handleComplete}
            onRemove={this.handleRemove}
            onCancel={this.toggleEdit}
          />
          : <ExpenseItem expense={expense} onEdit={this.toggleEdit}/>
        }
      </li>
    );
  }
}
 
export default connect(
  null,
  { update, remove }
)(Expense);