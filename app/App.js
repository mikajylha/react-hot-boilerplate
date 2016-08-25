import React, { Component } from 'react';
import Navbar from './Navbar';
import MainContent from './MainContent';


export default class App extends Component {
  render() {
    return (
      <div class="container">
        <Navbar/>
        <MainContent/>

      </div>
    );
  }
}
