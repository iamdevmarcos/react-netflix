import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 30px;

  &:hover {
    #arrow {
      opacity: 1;
    }
  }
`;

export const Title = styled.h2`
  margin: 0px 0px 0px 30px;
`;

export const LeftArrow = styled.div`
  position: absolute;
  width: 40px;
  height: 225px;
  background: rgba(0, 0, 0, 0.6);
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  cursor: pointer;
  opacity: 0;
  transition: all ease 0.5s;
  left: 0;

  &:hover {
    opacity: 1;
  }

  /* @media (max-width: 760px) {
    opacity: 1;
  } */
`;

export const RightArrow = styled.div`
  position: absolute;
  width: 40px;
  height: 225px;
  background: rgba(0, 0, 0, 0.6);
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  cursor: pointer;
  opacity: 0;
  transition: all ease 0.5s;
  right: 0;

  &:hover {
    opacity: 1;
  }

  /* @media (max-width: 760px) {
    opacity: 1;
  } */
`;

export const ListArea = styled.div`
  overflow-x: hidden;
  padding-left: 30px;

  @media (max-width: 760px) {
    overflow-x: auto;
  }
`;

export const List = styled.div`
  transition: all ease 0.5s;
`;

export const Item = styled.div`
  display: inline-block;
  width: 150px;
  cursor: pointer;
`;

export const Image = styled.img`
  width: 100%;
  transform: scale(0.9);
  transition: all ease 0.2s;

  &:hover {
    transform: scale(1);
  }
`;
