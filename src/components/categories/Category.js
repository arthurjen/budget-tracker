import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CategoryItem from './CategoryItem';
import CategoryForm from './CategoryForm';
import { update } from './actions';
import styles from './Category.css';

class Category extends Component {
  static propTypes = {
    category: PropTypes.object.isRequired,
    update: PropTypes.func.isRequired
  };

  render() { 
    const { category, update } = this.props;

    return (
      <li className={styles.category}>
      
        <CategoryItem category={category}/>
        <CategoryForm category={category} onComplete={update}/>
      </li>
    );
  }
}
 
export default connect(
  null,
  { update }
)(Category);