import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar.js';
import News from './components/News.js';
import NewsItem from './components/NewsItem.js';

export default class App extends Component {

  render() {
    return (
      <div>
        <Navbar />
        <News />
      </div>
    )
  }
}