import React from "react";

import { Container } from "./styles";

const Footer = () => {
  return (
    <Container>
      Direitos de imagem para{" "}
      <a
        href="https://www.netflix.com/br/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Netflix
      </a>
      <br />
      Dados da API do TMDB.
      <br />
      Feito com{" "}
      <span role="img" aria-label="heart">
        🤍
      </span>{" "}
      por{" "}
      <a href="https://marcosdev.me/" target="_blank" rel="noopener noreferrer">
        Marcos Andre
      </a>
    </Container>
  );
};

export default Footer;
