import './App.css';

import React, { Component } from 'react'

export default class App extends Component {
  c = 'John'; // This is a class variable
  render() {
    return (
      <div>Hello my first class based component {this.c}</div>
    )
  }
}