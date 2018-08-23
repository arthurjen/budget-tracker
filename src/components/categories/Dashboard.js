import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CategoryForm from './CategoryForm';
import Categories from './categories';
import { load, add, update } from './actions';

class Dashboard extends Component {


  render() {
    return (
      <div>
        <section>
          <h3>Add a Category</h3>
          <CategoryForm />
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
  { load, add }
)(Dashboard);