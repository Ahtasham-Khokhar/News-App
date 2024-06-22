import React, { Component } from "react";
import PropTypes from "prop-types";
import Spinner from "./Spinner";
import InfiniteScroll from 'react-infinite-scroll-component';
export class NewsItems extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }
  static props = {
    type: "Tesla Electric Vehicles:",
    category: PropTypes.string,
  };

  async componentDidMount() {
    let apiurl = `
    https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=376e49050f9d453789d85cdbeceaff18&pageSize= ${
      this.props.pageSize
    }&page = ${this.state.page + 1}`;

    try {
      const response = await fetch(apiurl);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const parsedData = await response.json();

      this.setState({ articles: parsedData.articles });
    } catch (error) {
      console.error("API not found"); // Use console.error instead of console.errro
    }
  }

  render() {
    this.state.loading && <Spinner />;
    const cards = this.state.articles.map((element) => (
      <div key={element.url} className="card" style={{ width: "18rem" }}>
        <span
          style={{
            padding: "6px",
            fontSize: "12px",
            zIndex: "1",
            marginLeft: "-40px",
          }}
          className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
        >
          {element.source.id}
          <span className="visually-hidden">unread messages</span>
        </span>

        <img
          src={
            element.urlToImage
              ? element.urlToImage
              : "https://www.reuters.com/resizer/JzIEjXdZXWb4VGQ9W6gDoraB26w=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/RUUV5CROL5NYPB434DWAQ2XI2U.jpg"
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">
            {element.title
              ? element.title
              : "Juke, Qashqai, X-Trail, etc., carrière longue obligatoire pour les modèles thermiques Nissan"}
          </h5>
          <p className="card-text">
            {element.description
              ? element.description
              : "Het Chinese merk Huawei staat bekend om zijn smartphones, maar het breidt zijn rol op de automarkt nu ook steeds verder uit. De techreus komt binnenkort samen met de automaker Chery onder het nieuwe merk Luxeed met een elektrische coupé-SUV.."}
            .
          </p>
          <h6 className="card-text">{element.author}.</h6>
          <p>{new Date(element.publishedAt).toGMTString()}</p>

          <a href={element.url} target="-blank" className="btn btn-dark">
            Read More ...
          </a>
        </div>
      </div>
    ));

    // Define the 'next' function
    const next = async () => {
      if (this.state.page + 1 > Math.ceil(this.state.totalResults / 7312)) {
        // Handle the case when you've reached the last page
      } else {
        let apiurl = `
        https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=376e49050f9d453789d85cdbeceaff18&pageSize= ${
          this.props.pageSize
        }&page = ${this.state.page + 1}`;
        this.setState({
          loading: true,
        });
        const response = await fetch(apiurl);
        const parsedData = await response.json();
        this.setState({
          page: this.state.page + 1,
          articles: parsedData.articles,
          loading: false,
        });
      }
    };

    const previous = async () => {
      if (this.state.page > 1) {
        let apiurl = `
    https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=376e49050f9d453789d85cdbeceaff18&pageSize= ${
      this.props.pageSize
    }&page = ${this.state.page - 1}`;
        const response = await fetch(apiurl);
        const parsedData = await response.json();

        this.setState({
          page: this.state.page - 1,
          articles: parsedData.articles,
        });
      } else {
        console.log("You're already on the first page");
      }
    };

    return (
      <>
        {cards}
        <div
          style={{ marginTop: "30px", width: "70vw" }}
          className="d-flex justify-content-between"
        >
          <button
            disabled={this.state.page === 1}
            style={{ width: "100px" }}
            onClick={previous}
            type="button"
            className="btn btn-dark"
          >
            Previous
          </button>
          <button
            disabled={this.state.page > Math.ceil(this.state.totalResults / 20)}
            style={{ width: "100px" }}
            onClick={next}
            type="button"
            className="btn btn-dark"
          >
            Next
          </button>
        </div>
      </>
    );
  }
}
export default NewsItems;
