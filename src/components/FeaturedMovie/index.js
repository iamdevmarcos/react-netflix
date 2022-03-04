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
  MyListButton,
  Genres,
} from "./styles";

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
            <MyListButton href={`/list/add/${item.id}`}>
              + Minha Lista
            </MyListButton>
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
