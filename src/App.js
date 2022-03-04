import React, { useState, useEffect } from "react";

import { Page, Lists } from "./App.styles";

import Api from "./services/api";

import Loading from "./components/Loading";
import Header from "./components/Header";
import FeaturedMovie from "./components/FeaturedMovie";
import MovieRow from "./components/MovieRow";
import Footer from "./components/Footer";

const App = () => {
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() => {
    const loadAll = async () => {
      const list = await Api.getHomeList();
      console.log(list);
      setMovieList(list);

      const originals = list.filter((i) => i.slug === "originals");
      const randomChosen = Math.floor(
        Math.random() * (originals[0].items.results.length - 1)
      );
      const chosen = originals[0].items.results[randomChosen];
      const chosenInfo = await Api.getMovieInfo(chosen.id, "tv");
      setFeaturedData(chosenInfo);
      console.log(chosenInfo);
    };

    loadAll();
  }, []);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    };

    window.addEventListener("scroll", scrollListener);

    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  return (
    <Page>
      <Header black={blackHeader} />

      {featuredData && <FeaturedMovie item={featuredData} />}

      <Lists>
        {movieList.map((item, index) => (
          <MovieRow key={index} title={item.title} items={item.items} />
        ))}
      </Lists>

      <Footer />

      {movieList.length <= 0 && <Loading />}
    </Page>
  );
};

export default App;
