import React, { useState, useEffect } from "react";
import "./App.css";

import Api from "./services/api";

const App = () => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const loadAll = async () => {
      const list = await Api.getHomeList();
      setMovieList(list);
    };

    loadAll();
  }, []);

  return (
    <div>
      <h1>Hello World!</h1>
    </div>
  );
};

export default App;
