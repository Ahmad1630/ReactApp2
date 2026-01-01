import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class NewsItem extends Component {



  render() {
   let  {title, description, imgurl, newsID } = this.props;
    return (

      <div> 

        <div className="card" style={{width: "18rem"}}>
          <img src={imgurl} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <a href="/newstdetaul/" className="btn btn-primary">Read more</a>
            </div>
        </div>     

      </div>

    )
  }
}

export default NewsItem
