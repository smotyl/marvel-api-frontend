import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 90vh;
  width: 100vw;

  img {
    width: 400px;
    height: auto;
  }

  h1 {
    color: #fff;
  }

  p {
    color: #fff;
  }
`;

export const Card = styled.div`
  margin-top: 200px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  flex-shrink: 1;
  align-items: center;
  justify-content: center;

  width: 500px;
  padding: 20px;

  background-color: rgba(255, 255, 255, 0.02);

  h1 {
    margin-top: 10px;
    font-size: 20px;
  }
`;

export const SeriesCard = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;

  width: 500px;
  padding: 20px;

  background-color: rgba(255, 255, 255, 0.02);

  h1 {
    display: inline;
    font-size: 20px;
  }

  span {
    color: #fff;
  }
`;

export const SeriesList = styled.ul`
  display: flex;
  flex-direction: column;
`;
