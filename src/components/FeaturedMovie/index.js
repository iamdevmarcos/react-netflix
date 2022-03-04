import React from "react";

import {
  Container,
  FeaturedHorizontal,
  FeaturedVertical,
  Title,
  Info,
  Points,
  Year,
  Seasons,
  Description,
  Buttons,
  WatchButton,
  TrailerButton,
  Genres,
} from "./styles";

import Api from "../../services/api";

const FeaturedMovie = ({ item }) => {
  const firstDate = new Date(item.first_air_date);

  const genres = [];
  for (let i in item.genres) {
    genres.push(item.genres[i].name);
  }

  let description = item.overview;
  if (description.length > 200) {
    description = description.substring(0, 200) + "...";
  }

  const handleMovieTrailer = async (movieId) => {
    const data = await Api.getMovieTrailer(movieId);

    const videoKey = data.results[0].key;
    window.open(`https://www.youtube.com/watch?v=${videoKey}`, "_blank");
  };

  return (
    <Container
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
      }}
    >
      <FeaturedVertical>
        <FeaturedHorizontal>
          <Title>{item.original_name}</Title>
          <Info>
            <Points>{item.vote_average} pontos</Points>
            <Year>{firstDate.getFullYear()}</Year>
            <Seasons>
              {item.number_of_seasons} temporada
              {item.number_of_seasons !== 1 ? "s" : ""}
            </Seasons>
          </Info>
          <Description>{description}</Description>

          <Buttons>
            <WatchButton href={item.homepage} target="_blank">
              ► Assistir
            </WatchButton>
            <TrailerButton onClick={() => handleMovieTrailer(item.id)}>
              ► Ver Trailer
            </TrailerButton>
          </Buttons>

          <Genres>
            <strong>Gêneros: </strong> {genres.join(", ")}
          </Genres>
        </FeaturedHorizontal>
      </FeaturedVertical>
    </Container>
  );
};

export default FeaturedMovie;
