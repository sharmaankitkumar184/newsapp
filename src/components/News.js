import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalArticles, setTotalArticles] = useState(0);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews = async () => {
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    props.setProgress(30);
    let data = await fetch(url);
    props.setProgress(50);
    let parsedData = await data.json();
    props.setProgress(70);
    setArticles(parsedData.articles);
    setLoading(false);
    setTotalArticles(parsedData.totalResults);
    props.setProgress(100);
  };

  useEffect(() => {
    document.title = `NewsMonkey - Top ${capitalizeFirstLetter(
      props.category
    )} Headlines`;
    updateNews();
    // eslint-disable-next-line
  }, []);

  // Paginations Code

  // handlePrevClick = async () => {
  //   setPage(page-1);
  //   updateNews();
  // };

  // handleNextClick = async () => {
  //   setPage(page+1);
  //   updateNews();
  // };

  const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=${props.apiKey}&page=${
      page + 1
    }&pageSize=${props.pageSize}`;
    setPage(page + 1);
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setLoading(false);
    setTotalArticles(parsedData.totalResults);
  };
  return (
    <>
      <h2
        style={{
          marginBottom: "35px",
          marginTop: "75px",
          textAlign: "center",
          color: props.mode === "light" ? "black" : "white",
        }}
      >{`NewsMonkey - Top ${capitalizeFirstLetter(
        props.category
      )} Headlines`}</h2>
      {loading && <Spinner Mode={props.mode} />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalArticles}
        loader={loading && <Spinner Mode={props.mode} />}
      >
        <div className="container">
          <div className="row ">
            {articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    Mode={props.mode}
                    title={element.title ? element.title.slice(0, 45) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 88)
                        : ""
                    }
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>

          {/* Paginations Code */}
          {/* <div className="container d-flex justify-content-between">
              <button
                disabled={page <= 1}
                type="button"
                className={`btn btn-${
                  props.mode === "light" ? "dark" : "light"
                }`}
                onClick={handlePrevClick}
              >
                &larr; Previous
              </button>
              <p
                style={{
                  color: props.mode === "light" ? "black" : "white",
                }}
              >
                Total Count:{totalArticles}
              </p>
              <button
                disabled={
                  page + 1 >
                  Math.ceil(totalArticles / props.pageSize)
                }
                type="button"
                className={`btn btn-${
                  props.mode === "light" ? "dark" : "light"
                }`}
                onClick={handleNextClick}
              >
                Next &rarr;
              </button>
            </div> */}
        </div>
      </InfiniteScroll>
    </>
  );
};

export default News;

News.defaultProps = {
  country: "in",
  pageSize: 9,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};
