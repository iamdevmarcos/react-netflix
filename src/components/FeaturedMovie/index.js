import React from "react";
import "./style.css";

const FeaturedMovie = ({ item }) => {
  return (
    <section
      className="featured"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
      }}
    >
      <div className="featured--vertical">
        <div className="featured--horizontal">
          <div className="">{item.original_name}</div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMovie;
