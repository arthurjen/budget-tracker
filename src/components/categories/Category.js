import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CategoryItem from './CategoryItem';
import CategoryForm from './CategoryForm';
import { update, remove } from './actions';
import styles from './Category.css';

class Category extends PureComponent {

  state = {
    editing: false
  };

  static propTypes = {
    category: PropTypes.object.isRequired,
    update: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
  };

  toggleEdit = () => {
    console.log('toggling');
    this.setState(({ editing }) => ({ editing: !editing }));
  };

  handleComplete = category => {
    this.props.update(category);
    this.toggleEdit();
  };

  handleRemove = key => {
    this.props.remove(key);
    this.toggleEdit();
  };

  render() { 
    const { category } = this.props;
    const { editing } = this.state;

    return (
      <li className={styles.category}>
        {editing
          ? <CategoryForm
            category={category}
            onComplete={this.handleComplete}
            onRemove={this.handleRemove}
            onCancel={this.toggleEdit}
          />
          : <CategoryItem category={category} onEdit={this.toggleEdit}/>
        }
      </li>
    );
  }
}
 
export default connect(
  null,
  { update, remove }
)(Category);