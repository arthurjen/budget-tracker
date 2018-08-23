import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CategoryForm from './CategoryForm';
import Categories from './Categories';
import { add } from './actions';

class Dashboard extends Component {
  static propTypes = {
    add: PropTypes.func.isRequired
  };

  render() {
    const { add } = this.props;
    
    return (
      <div>
        <section>
          <h3>Add a Category</h3>
          <CategoryForm onComplete={add}/>
        </section>
        <section>
          <h2>Categories</h2>
          <Categories />
        </section>
      </div>
    );
  }
}

export default connect(
  state => ({ categories: state }),
  { add }
)(Dashboard);