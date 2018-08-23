import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Category from './Category';
import { load } from './actions';

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

    return ( 
      <ul>
        {categories.map(category => (
          <Category
            key={category.key}
            category={category}
          />
        ))}
      </ul>
    );
  }
}
 
export default connect(
  state => ({ categories: state }),
  { load }
)(Categories);