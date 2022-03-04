import React, { useState } from "react";

import {
  Container,
  Title,
  LeftArrow,
  RightArrow,
  ListArea,
  List,
  Item,
  Image,
} from "./styles";

import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

const MovieRow = ({ title, items }) => {
  const [movieId, setMovieId] = useState(null);
  const [scrollX, setScrollX] = useState(0);

  const handleLeftArrow = () => {
    let x = scrollX + Math.round(window.innerWidth / 2);
    if (x > 0) {
      x = 0;
    }

    setScrollX(x);
  };

  const handleRightArrow = () => {
    let x = scrollX - Math.round(window.innerWidth / 2);
    let listW = items.results.length * 150;
    if (window.innerWidth - listW > x) {
      x = window.innerWidth - listW - 60;
    }

    setScrollX(x);
  };

  const handleMovieModal = () => {};

  return (
    <Container>
      <Title>{title}</Title>

      <LeftArrow onClick={handleLeftArrow} id="arrow">
        <NavigateBeforeIcon style={{ fontSize: 50 }} />
      </LeftArrow>

      <RightArrow onClick={handleRightArrow} id="arrow">
        <NavigateNextIcon style={{ fontSize: 50 }} />
      </RightArrow>

      <ListArea>
        <List
          style={{ marginLeft: scrollX, width: items.results.length * 150 }}
        >
          {items.results.length > 0 &&
            items.results.map((item, index) => (
              <>
                <Item key={index} onClick={handleMovieModal}>
                  <Image
                    src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                    alt={item.original_title}
                  />
                </Item>

                {/* {movieId === item.id}
                <div>
                  <h1>{}</h1>
                </div> */}
              </>
            ))}
        </List>
      </ListArea>
    </Container>
  );
};

export default MovieRow;
