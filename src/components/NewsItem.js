import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class NewsItem extends Component {



  render() {
   let  {title, description, imgurl, newsUrl } = this.props;
    return (

      <div> 

        <div className="card my-2" style={{width: "18rem"}}>
          <img src={imgurl} className="card-img-top" alt="..."/> 
            <div className="card-body"> 
              <h5 className="card-title">{title.slice(0, 40)}...</h5> 
              <p className="card-text">{description.slice(0, 90)}...</p> 
              <a href={newsUrl} target='_blank' className="btn btn-primary">Read more</a> 
            </div>
        </div>     

      </div>

    )
  }
}

export default NewsItem
