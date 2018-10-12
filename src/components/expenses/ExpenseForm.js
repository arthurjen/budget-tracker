import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './ExpenseForm.css';

class ExpenseForm extends PureComponent {
  
  state = {
    id: null,
    categoryId: null,
    name: '',
    cost: '',
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
        <section className="inputs">
          <label>
            <input name="name" placeholder="Expense" value={name} onChange={this.handleChange}/>
          </label>
          <label>
            <input name="cost" placeholder="Cost" value={cost} onChange={this.handleChange}/>
          </label>
        </section>
        {id &&
        <button type="remove" onClick={this.onDelete}><i className="far fa-trash-alt" ></i></button>
        }
        <button type="button" onClick={onCancel}><i className="fas fa-ban"></i></button>
        <button type="submit">
          {id 
            ? <i className="fas fa-check"></i>
            : <i className="fas fa-plus"></i>
          }
        </button>
      </form>
    );
  }
}
 
export default ExpenseForm;