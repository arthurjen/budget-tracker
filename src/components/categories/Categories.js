import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Category from './Category';
import { load } from './actions';
import { getCategories } from './reducers';
import styles from './Categories.css';

export class Categories extends PureComponent {

  static propTypes = {
    categories: PropTypes.array,
    load: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.load();
  }

  render() { 
    const { categories } = this.props;
    if(!categories) return;
    
    return ( 
      <ul className={styles.categories}>
        {categories.map(category => (
          <Category
            key={category.id}
            category={category}
          />
        ))}
      </ul>
    );
  }
}
 
export default connect(
  state => ({ categories: getCategories(state) }),
  { load }
)(Categories);