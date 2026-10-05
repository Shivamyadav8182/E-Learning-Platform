import React, { useState } from "react";
import "./Card.css";

const Card = ({ course }) => {

  const [liked, setLiked] = useState(false);

  const likeHandler = () => {
    setLiked(!liked);
  };

  return (
    <div className="card">

      <img
        className="card-image"
        src={course.image.url}
        alt={course.title}
      />

      <div className="card-content">

        <h2 className="card-title">
          {course.title}
        </h2>

        <p className="card-description">
          {course.description}
        </p>

        <button
          className={`like-button ${liked ? "liked" : ""}`}
          onClick={likeHandler}
        >
          {liked ? "❤️ Liked" : "🤍 Like"}
        </button>

      </div>

    </div>
  );
};

export default Card;