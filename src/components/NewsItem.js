import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class NewsItem extends Component {



  render() {
   let  {title, description, imgurl, newsUrl } = this.props;
    return (

      <div> 

        <div className="card" style={{width: "18rem"}}>
          <img src={imgurl} className="card-img-top" alt="..."/> // img url from props goes here
            <div className="card-body"> 
              <h5 className="card-title">{title}</h5> // title from props goes here
              <p className="card-text">{description}</p> // description from props goes here
              <a href="/newstdetaul/" className="btn btn-primary">Read more</a> // news url from props goes here
            </div>
        </div>     

      </div>

    )
  }
}

export default NewsItem
