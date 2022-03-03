import React from "react";
import { Container, Image } from "./styles";

const Loading = () => {
  return (
    <Container>
      <Image
        src="https://webinars.motivatingthemasses.com/fromgood2unforgettable/images/poster-loading.gif"
        alt="Carregando..."
      />
    </Container>
  );
};

export default Loading;
