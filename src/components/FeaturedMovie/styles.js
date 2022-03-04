import styled from "styled-components";

export const Container = styled.section`
  height: 100vh;

  @media (max-width: 760px) {
    height: 90vh;
  }
`;

export const FeaturedVertical = styled.div`
  width: inherit;
  height: inherit;
  background: linear-gradient(to top, #111 10%, transparent 90%);
`;

export const FeaturedHorizontal = styled.div`
  width: inherit;
  height: inherit;
  background: linear-gradient(to right, #111 30%, transparent 70%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 30px;
  padding-bottom: 150px;
  padding-top: 70px;
`;

export const Title = styled.div`
  font-size: 60px;
  font-weight: bold;
  margin-bottom: 15px;

  @media (max-width: 760px) {
    font-size: 40px;
  }
`;

export const Info = styled.div`
  font-size: 18px;
  font-weight: bold;

  @media (max-width: 760px) {
    font-size: 16px;
  }
`;

export const Points = styled.div`
  display: inline-block;
  margin-right: 15px;
  color: #46d369;
`;

export const Year = styled.div`
  display: inline-block;
  margin-right: 15px;
`;

export const Seasons = styled.div`
  display: inline-block;
  margin-right: 15px;
`;

export const Description = styled.div`
  margin-top: 15px;
  font-size: 20px;
  color: #999;
  max-width: 40%;

  @media (max-width: 760px) {
    font-size: 14px;
    max-width: 100%;
    margin-right: 30px;
  }
`;

export const Buttons = styled.div`
  margin-top: 15px;
`;

export const WatchButton = styled.a`
  display: inline-block;
  font-size: 20px;
  font-weight: bold;
  padding: 12px 25px;
  border-radius: 5px;
  text-decoration: none;
  margin-right: 10px;
  opacity: 1;
  transition: all ease 0.2s;

  background: #fff;
  color: #000;

  &:hover {
    opacity: 0.7;
  }

  @media (max-width: 760px) {
    font-size: 16px;
  }
`;

export const TrailerButton = styled.a`
  display: inline-block;
  font-size: 20px;
  font-weight: bold;
  padding: 12px 25px;
  border-radius: 5px;
  text-decoration: none;
  margin-right: 10px;
  opacity: 1;
  transition: all ease 0.2s;
  cursor: pointer;

  background: #333;
  color: #fff;

  &:hover {
    opacity: 0.7;
  }

  @media (max-width: 760px) {
    font-size: 16px;
  }
`;

export const Genres = styled.div`
  margin-top: 15px;
  font-size: 18px;
  color: #999;

  @media (max-width: 760px) {
    font-size: 14px;
  }
`;
