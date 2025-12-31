import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NewsItem from './NewsItem.js'

export class News extends Component {
  static propTypes = {

  }

  render() {
    return (
      <div>
        This is the news section
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />

      </div>
    )
  }
}

export default News
