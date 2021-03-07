import React, { Component } from 'react';
import { HashRouter } from "react-router-dom";

import './App.css';
import Nav from './Header/Nav'
import Cover from './Header/Cover'
import Container from './Contents/Container'
import Footer from './Contents/Footer'

class App extends Component {
  render() {
    return (
      <HashRouter basename="/">
        <div className="landing-page sidebar-collapse">
          <Nav />
          <Cover />
          <Container />
          <Footer />
        </div>
      </HashRouter>
    );
  }
}

export default App;
