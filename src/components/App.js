import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Dashboard from './Dashboard';
import styles from './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className={styles.app}>
          <header>
            <h1>Budget Tracker</h1>
          </header>
          <main>
            <Switch>
              <Route exact path="/" component={Dashboard}/>
              <Redirect to="/"/>
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;