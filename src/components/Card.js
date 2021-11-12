import React from "react";

const Card = (props) => {
  const { content } = props;

  return (
    <div className="card">
      <img src={content.imageUrl} alt="Cat" className="card-img-top" />
      <div className="card-body">
        <h4>{content.title}</h4>
        <small className="text-muted">Published {content.published}</small>
      </div>
    </div>
  );
};

export default Card;
