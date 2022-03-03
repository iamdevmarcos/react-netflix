import React, { useEffect } from "react";
import "./App.css";

import Api from "./services/api";

const App = () => {
  useEffect(() => {
    const loadAll = async () => {
      const list = await Api.getHomeList();
      console.log(list);
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
