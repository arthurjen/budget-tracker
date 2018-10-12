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
    this.props.onComplete(category);
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
        
        <section className="inputs">
          <label>
            <input name="name" placeholder="Category" value={name} onChange={this.handleChange}/>
          </label>
          <label>
            <input name="budget" type="number" placeholder="Maximum $$$" value={budget} onChange={this.handleChange}/>
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


 
export default CategoryForm;