import React from "react";

function NewsItem  (props){
 
    let { title, description, imageUrl, newsUrl, author, publishedAt, name } =
      props;
    return (
      <>
        <div className="card" style={{ width: "18rem" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              position: "absolute",
              right: "0",
            }}
          >
            <span
              className="badge rounded-pill bg-danger"
              style={{ zIndex: "1", left: "10px" }}
            >
              {name}{" "}
            </span>
          </div>
          <img
            src={
              imageUrl
                ? imageUrl
                : "https://t4.ftcdn.net/jpg/04/70/29/97/240_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg"
            }
            className="card-img-top"
            alt="..."
            style={{ height: "180px" }}
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-body-secondary">
                ~By {author} on {new Date(publishedAt).toGMTString()}
              </small>
            </p>
            <a href={newsUrl} target="_blank " className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </>
    );
  }


export default NewsItem;
