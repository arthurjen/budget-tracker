import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CategoryForm from './CategoryForm';
import Categories from './Categories';
import { add } from './actions';
import styles from './Dashboard.css';

class Dashboard extends Component {

  state = {
    adding: false
  };

  static propTypes = {
    add: PropTypes.func.isRequired
  };

  handleAdd = category => {
    const { add } = this.props;
    return add(category)
      .then(() => this.toggleAdding());
  };

  toggleAdding = () => {
    this.setState(({ adding }) => ({ adding: !adding }));
  };

  render() {
    const { adding } = this.state;
    
    return (
      <div className={styles.dashboard}>
        <h2>CATEGORIES</h2>
        <section className="category-form">
          {adding 
            ? <CategoryForm onCancel={this.toggleAdding} onComplete={this.handleAdd}/>
            : <button className="toggle" onClick={this.toggleAdding}>Add a Category</button>
          }
        </section>
        <Categories />
      </div>
    );
  }
}

export default connect(
  state => ({ categories: state }),
  { add }
)(Dashboard);