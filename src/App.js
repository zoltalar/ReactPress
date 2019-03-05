import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

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
                  <Container className="pt-5">
                      <Row>
                          <Col sm={{ size: 4, offset: 4 }}>
                              <Route path="/register" component={ Register }></Route>
                              <Route path="/login" component={ Login }></Route>
                          </Col>
                      </Row>
                  </Container>
              </div>
          </Router>
      </div>
    );
  }
}

export default App;