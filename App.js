import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import styles from './App.css';
import Header from './Header.js';
import Home from './Home.js';
import DashboardContainer from './notes/DashboardContainer.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div className={styles.app}>
          <Header/>
          <main>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/dashboard" component={DashboardContainer}/>
              <Redirect to="/"/>
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;