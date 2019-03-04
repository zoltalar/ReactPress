import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Header from './Components/Header.js';
import Login from './Components/Login.js';
import Register from './Components/Register.js';

import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="app">
          <Router>
              <div>
                  <Header />
                  <Route path="/register" component={ Register }></Route>
                  <Route path="/login" component={ Login }></Route>
              </div>
          </Router>
      </div>
    );
  }
}

export default App;