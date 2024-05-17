import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import PropTypes from "prop-types";

function News(props) {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;

    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(parsedData.articles);
  };

  useEffect(() => {
    updateNews();
  }, [page]); 

  const handlePrevClick = () => {
    setPage(page - 1);
  };

  const handleNextClick = () => {
    setPage(page + 1);
  };

  return (
    <div>
      <h1 className="text-align my-5 mx-5" style={{ margin: "auto" }}>
        News Weekly: Top {capitalizeFirstLetter(props.category)} Headlines
      </h1>

      <div className="container my-3">
        <div className="row">
          {articles &&
            articles.map((element) => {
              return (
                <div className="col-md-4 my-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 30) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 90)
                        : ""
                    }
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author ? element.author : "unknown"}
                    publishedAt={element.publishedAt}
                    name={element.source.name}
                  />
                </div>
              );
            })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={page <= 1}
            type="button"
            className="btn btn-info btn-dark"
            onClick={handlePrevClick}
          >
            &laquo; Prev
          </button>
          <button
            disabled={!articles.length || articles.length < props.pageSize}
            type="button"
            className="btn btn-info btn-dark"
            onClick={handleNextClick}
          >
            Next &raquo;
          </button>
        </div>
      </div>
    </div>
  );
}

News.defaultProps = {
  country: "in",
  pageSize: 10,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
  apiKey: PropTypes.string.isRequired,
};

export default News;
