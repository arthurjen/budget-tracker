import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CategoryForm from './CategoryForm';
import Categories from './Categories';
import { add } from './actions';

class Dashboard extends Component {

  state = {
    adding: false
  };

  static propTypes = {
    add: PropTypes.func.isRequired
  };

  toggleAdding = () => {
    this.setState(({ adding }) => ({ adding: !adding }));
  };

  render() {
    const { add } = this.props;
    const { adding } = this.state;
    
    return (
      <div>
        <h2>Categories</h2>
        <section>
          {adding 
            ? <CategoryForm onComplete={add}/>
            : <button onClick={this.toggleAdding}>Add a Category</button>
          }
        </section>
        <section>
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