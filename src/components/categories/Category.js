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
    this.setState(({ editing }) => ({ editing: !editing }));
  };

  handleComplete = category => {
    const { update } = this.props;
    return update(category)
      .then(() => this.toggleEdit());
  };

  render() { 
    const { category, remove } = this.props;
    const { editing } = this.state;

    return (
      <li className={styles.category}>
        {editing &&
          <CategoryForm
            category={category}
            onComplete={this.handleComplete}
            onRemove={remove}
            onCancel={this.toggleEdit}
          />
        }
        <CategoryItem category={category} onEdit={this.toggleEdit}/>
      </li>
    );
  }
}
 
export default connect(
  null,
  { update, remove }
)(Category);