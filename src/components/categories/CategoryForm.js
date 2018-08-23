import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './CategoryForm.css';

class CategoryForm extends PureComponent {
  
  state = {
    name: '',
    budget: 0,
    timestamp: null,
    key: null
  };

  static propTypes = {
    category: PropTypes.object,
    onComplete: PropTypes.func.isRequired,
    onCancel: PropTypes.func
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, budget, key, timestamp } = this.state;
    const category = { name, budget };
    if(key) category.key = key;
    if(timestamp) category.timestamp = timestamp;
    this.props.onComplete(category);
    if(!key) this.setState({ name: '', budget: 0 });

  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  componentDidMount() {
    const { category } = this.props;
    if(!category) return;
    this.setState(category);
  }


  render() { 
    const { name, budget, key } = this.state;
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
        {key &&
          <button type="button" onClick={onCancel}>Cancel</button>
        }
        <button type="submit">{ key ? 'Save' : 'Add' }</button>
      </form>
    );
  }
}
 
export default CategoryForm;