import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CategoryItem from './CategoryItem';
import CategoryForm from './CategoryForm';
import { update } from './actions';
import styles from './Category.css';

class Category extends PureComponent {

  state = {
    editing: false
  };

  static propTypes = {
    category: PropTypes.object.isRequired,
    update: PropTypes.func.isRequired
  };

  toggleEdit = () => {
    console.log('toggling');
    this.setState(({ editing }) => ({ editing: !editing }));
  };

  handleComplete = category => {
    console.log('updating');
    const { update } = this.props;
    update(category);
    this.toggleEdit;
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
  { update }
)(Category);