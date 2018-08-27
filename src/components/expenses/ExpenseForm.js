import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './ExpenseForm.css';

class ExpenseForm extends PureComponent {
  
  state = {
    id: null,
    categoryId: null,
    name: '',
    cost: 0,
    timestamp: null,
  };

  static propTypes = {
    expense: PropTypes.object,
    onComplete: PropTypes.func.isRequired,
    onCancel: PropTypes.func,
    onRemove: PropTypes.func,
    categoryId: PropTypes.string.isRequired
  };

  handleSubmit = event => {
    event.preventDefault();
    const { id, categoryId, name, cost, timestamp } = this.state;
    const expense = { name, cost, categoryId };
    if(id) expense.id = id;
    if(timestamp) expense.timestamp = timestamp;
    this.props.onComplete(expense);
    if(!id) this.setState({ name: '', budget: 0 });
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  componentDidMount() {
    const { expense, categoryId } = this.props;
    this.setState({ categoryId });
    if(!expense) return;
    this.setState(expense);
  }

  onDelete = event => {
    event.preventDefault();
    const { onRemove } = this.props;
    onRemove(this.state);
  };


  render() { 
    const { name, cost, id } = this.state;
    const { onCancel } = this.props;

    return (
      <form className={styles.expenseForm} onSubmit={this.handleSubmit}>
        <label>
          Name: &nbsp;
          <input name="name" value={name} onChange={this.handleChange}/>
        </label>
        <label>
          Cost: &nbsp;
          <input name="cost" value={cost} onChange={this.handleChange}/>
        </label>
        <section>
          {id &&
          <span>
            <button type="button" onClick={onCancel}>Cancel</button>
            <button type="remove" onClick={this.onDelete}>Delete</button>
          </span>
          }
          <button type="submit">{ id ? 'Save' : 'Add' }</button>

        </section>
      </form>
    );
  }
}
 
export default ExpenseForm;