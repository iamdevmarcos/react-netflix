import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;

const http = axios.create({
  baseURL: process.env.REACT_APP_API_BASE,
});

const fetch = async (endpoint) => {
  const req = await http.get(`${endpoint}`);
  return req.data;
};

const api = {
  getHomeList: async () => {
    return [
      {
        slug: "originals",
        title: "Originais do Netflix",
        items: await fetch(
          `/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "trending",
        title: "Recomendados para Você",
        items: await fetch(
          `/trending/all/week?language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "toprated",
        title: "Em Alta",
        items: await fetch(
          `/movie/top_rated?language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "action",
        title: "Ação",
        items: await fetch(
          `/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "comedy",
        title: "Comédia",
        items: await fetch(
          `/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "horror",
        title: "Terror",
        items: await fetch(
          `/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "romance",
        title: "Romance",
        items: await fetch(
          `/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "documentary",
        title: "Documentários",
        items: await fetch(
          `/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`
        ),
      },
    ];
  },
  getMovieInfo: async (movieId, type) => {
    let info = {};

    if (movieId) {
      switch (type) {
        case "movie":
          info = await fetch(
            `/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`
          );
          break;

        case "tv":
          info = await fetch(
            `/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`
          );
          break;

        default:
          info = null;
          break;
      }
    }

    return info;
  },
  getMovieTrailer: async (movieId) => {
    const res = await fetch(`/tv/${movieId}/videos?&api_key=${API_KEY}`);

    return res;
  },
};

export default api;
