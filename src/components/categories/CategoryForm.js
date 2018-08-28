import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './CategoryForm.css';

class CategoryForm extends PureComponent {
  
  state = {
    name: '',
    budget: '',
    timestamp: null,
    id: null
  };

  static propTypes = {
    category: PropTypes.object,
    onComplete: PropTypes.func.isRequired,
    onCancel: PropTypes.func,
    onRemove: PropTypes.func
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, budget, id, timestamp } = this.state;
    if(!name || !budget) return;
    let category = { name, budget };
    if(id) category = { ...category, id, timestamp };
    this.props.onComplete(category)
      .then(() => {
        if(!this.props.category) this.setState({ name: '', budget: '' });
      });
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  componentDidMount() {
    const { category } = this.props;
    if(!category) return;
    this.setState(category);
  }

  onDelete = event => {
    event.preventDefault();
    const { onRemove } = this.props;
    const { id } = this.state;
    onRemove(id);
  };


  render() { 
    const { name, budget, id } = this.state;
    const { onCancel } = this.props;

    return (
      <form className={styles.categoryForm} onSubmit={this.handleSubmit}>
        <label>
          Name: &nbsp;
          <input name="name" value={name} onChange={this.handleChange}/>
        </label>
        <label>
          Amount: &nbsp;
          <input name="budget" value={budget} onChange={this.handleChange}/>
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
 
export default CategoryForm;