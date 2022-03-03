import React, { useState, useEffect } from "react";
import "./App.css";

import Api from "./services/api";

import MovieRow from "./components/MovieRow";

const App = () => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const loadAll = async () => {
      const list = await Api.getHomeList();
      console.log(list);
      setMovieList(list);
    };

    loadAll();
  }, []);

  return (
    <div className="page">
      {/* Header */}

      {/* Destaque */}

      {/* Listas */}
      <section className="lists">
        {movieList.map((item, index) => (
          <MovieRow key={index} title={item.title} items={item.items} />
        ))}
      </section>

      {/* Footer */}
    </div>
  );
};

export default App;
