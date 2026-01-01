import React, { Component } from "react";
import PropTypes from "prop-types";
import NewsItem from "./NewsItem.js";

export class News extends Component {
  static propTypes = {};

  render() {
    return (
      <div className="container my-5">

        <h1 className="mb-3">News</h1>


        <div className="row">

            <div className="col-md-4">
              <NewsItem title="My title" description="This is a description" imgurl="https://www.aljazeera.com/wp-content/uploads/2025/12/AP25365153696099-1767157848.jpg?resize=1920%2C1367"/>
            </div>

            <div className="col-md-4">
              <NewsItem title="My title" description="This is a description" />
            </div>

            <div className="col-md-4">
              <NewsItem title="My title" description="This is a description" />
            </div>

        </div>


      </div>
    );
  }
}

export default News;
