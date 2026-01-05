import React, { Component } from "react";
import PropTypes from "prop-types";
import NewsItem from "./NewsItem.js";

export class News extends Component {

  articles = "articles" [{
      "source": {
        "id": "al-jazeera-english",
        "name": "Al Jazeera English"
      },
      "author": "Al Jazeera",
      "title": "Thailand releases 18 Cambodian soldiers as ceasefire holds - Al Jazeera",
      "description": "Thailand hands over 18 soldiers after 155 days of captivity as truce agreed over the weekend continues to hold.",
      "url": "https://www.aljazeera.com/news/2025/12/31/thailand-releases-18-cambodian-soldiers-as-ceasefire-holds",
      "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2025/12/AP25365153696099-1767157848.jpg?resize=1920%2C1367",
      "publishedAt": "2025-12-31T05:37:30Z",
      "content": "Thailand has released 18 Cambodian prisoners of war three days after the two countries agreed to a renewed ceasefire to end weeks of deadly border clashes.\r\nCambodias Ministry of National Defence sai… [+2523 chars]"
    },
    {
      "source": {
        "id": "the-washington-post",
        "name": "The Washington Post"
      },
      "author": "Claire Parker, Abbie Cheeseman",
      "title": "Tensions between Saudi Arabia and UAE spike with bombing of port - The Washington Post",
      "description": "The Saudi strike in Yemen on an alleged weapons shipment from the UAE marked an unprecedented escalation of friction between the rival Persian Gulf powers.",
      "url": "https://www.washingtonpost.com/world/2025/12/30/saudi-arabia-yemen-strikes-uae-mukalla/",
      "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/MWFH6QFL44WBU6RHMHSYCQORHA.jpg&w=1440",
      "publishedAt": "2025-12-31T02:51:53Z",
      "content": "Saudi Arabia carried out an airstrike on the southern Yemen port city of Mukalla early Tuesday, targeting what it described as weapons shipments bound for a separatist force backed by the United Arab… [+89 chars]"
    },
    {
      "source": {
        "id": "politico",
        "name": "Politico"
      },
      "author": "Associated Press",
      "title": "Former US Sen. Ben Nighthorse Campbell, of Colorado, dies at 92 - Politico",
      "description": "The motorcycle-riding lawmaker and cattle rancher was considered a maverick even before he abruptly switched to the Republican Party in March 1995.",
      "url": "https://www.politico.com/news/2025/12/30/former-us-sen-ben-nighthorse-campbell-of-colorado-dies-at-92-00708406",
      "urlToImage": "https://www.politico.com/dims4/default/resize/1200/quality/90/format/jpg?url=https%3A%2F%2Fstatic.politico.com%2F5e%2F0a%2Fc4b5d6854af9a6815c309dff2cc4%2Fobit-ben-nighthorse-campbell-11839.jpg",
      "publishedAt": "2025-12-31T02:41:47Z",
      "content": "A member of the Northern Cheyenne tribe, Campbell said his ancestors were among more than 150 Native Americans, mostly women, children and elderly men, killed by U.S. soldiers while camped under a fl… [+6139 chars]"
    },
    {
      "source": {
        "id": "axios",
        "name": "Axios"
      },
      "author": "Jason Lalljee",
      "title": "Kennedy Center exodus: The 11 acts, creators pulling out amid Trump takeover - Axios",
      "description": "A jazz ensemble and a New York dance company this week joined those canceling their events at the Kennedy Center.",
      "url": "https://www.axios.com/2025/12/30/new-years-2026-trump-kennedy-center",
      "urlToImage": "https://images.axios.com/xgJjDQBLJmp9QILqqyZduSg751E=/0x0:3463x1948/1366x768/2025/12/30/1767124457555.jpeg",
      "publishedAt": "2025-12-31T02:35:59Z",
      "content": "Driving the news: The Cookers, a jazz ensemble, as well as Doug Varone and Dancers, a New York dance company, both announced that they were canceling shows this week. \r\nWhat they're saying: The Cooke… [+5985 chars]"
    }]


    

  constructor() {
    super();
    console.log("Hello I am a constructor from News component");
    this.state = {
      articles : this.articles,
      loading: false
    };
  }




  render() {
    return (
      <div className="container my-5">
        <h1 className="mb-3">News</h1>

        <div className="row">
          <div className="col-md-4">
            <NewsItem
              title="My title"
              description="This is a description"
              imgurl="https://www.aljazeera.com/wp-content/uploads/2025/12/AP25365153696099-1767157848.jpg?resize=1920%2C1367"
              newsUrl="TODO"/>
          </div>

          <div className="col-md-4">
            <NewsItem title="My title B" description="This is a description" />
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
