import styled from "styled-components";

export const Container = styled.header`
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  background: transparent;
  transition: all ease 0.5s;
  background: ${(props) => props.bg};
`;

export const Logo = styled.div`
  height: 25px;
`;

export const User = styled.div`
  height: 35px;
  background: #141414;
  border-radius: 5px;
`;

export const Image = styled.img`
  height: 100%;
`;
