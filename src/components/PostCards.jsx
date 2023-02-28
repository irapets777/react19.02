import React from "react";
const PostCards = ({post}) => {
    const {title, body} = post;
  return (
    <div className="card m-3">
      <div className="card-body">
        <h5 style={{color: "#003d99", textTransform: "capitalize"}} className="card-title">{title}</h5>
        <p className="card-text">{body}</p>
        <button >Delete</button>

      </div>
    </div>
  );
};

export default PostCards;
