import React from "react";

import { Container, Logo, User, Image } from "./styles";

const Header = ({ black }) => {
  return (
    <Container bg={black ? "#141414" : "transparent"}>
      <Logo>
        <a href="/">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/200px-Netflix_2015_logo.svg.png"
            alt="Netflix"
          />
        </a>
      </Logo>
      <User>
        <a href="/">
          <Image src="/favicon.png" alt="Usuário" />
        </a>
      </User>
    </Container>
  );
};

export default Header;
