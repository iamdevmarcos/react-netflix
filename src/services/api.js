const API_KEY = "7560292fe6fc183a79b021023a9bd2ed";
const API_BASE = "https://api.themoviedb.org/3/";

// - Originais
// - Recomendados (trending)
// - Em alta (top rated)
// - Ação
// - Etc

export default {
  getHomeList: async () => {
    return [
      {
        slug: "originals",
        title: "Originais do Netflix",
        items: [],
      },
      {
        slug: "treding",
        title: "Recomendados para você",
        items: [],
      },
      {
        slug: "toprated",
        title: "Em Alta",
        items: [],
      },
      {
        slug: "action",
        title: "Ação",
        items: [],
      },
      {
        slug: "comedy",
        title: "Comédia",
        items: [],
      },
      {
        slug: "horror",
        title: "Terror",
        items: [],
      },
      {
        slug: "romance",
        title: "Romance",
        items: [],
      },
      {
        slug: "documentary",
        title: "Documentários",
        items: [],
      },
    ];
  },
};
