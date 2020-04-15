import React, { Component } from 'react';
import './App.css';
import Nav from './Header/Nav'
import Cover from './Header/Cover'
import Container from './Contents/Container'
import Footer from './Contents/Footer'

class App extends Component {
  render() {
    return (
      <div className="landing-page sidebar-collapse">
        <Nav />
        <Cover />
        <Container />
        <Footer />
      </div>
    );
  }
}

export default App;
