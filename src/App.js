import React, { Component } from 'react';
import Header from './Components/Header.js';

import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header></Header>
      </div>
    );
  }
}

export default App;
