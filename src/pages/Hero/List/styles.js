import styled from 'styled-components';

export const Container = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;

  padding-top: 70px;
  min-height: 90vh;

  @media (max-width: 600px) {
    padding-top: 110px;
  }
`;

export const Card = styled.li`
  width: 300px;
  height: 300px;
  margin: 10px;

  position: relative;
  overflow: hidden;
  border-radius: 40px;
  background-color: #999;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
    animation: hover 1s infinite alternate ease-in-out;

    border: 5px solid yellow;
    margin: 5px;

    img {
      filter: grayscale(0);
    }
  }

  img {
    width: 100%;
    height: auto;
    filter: grayscale(1);
  }

  div {
    position: absolute;
    bottom: 10px;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.6);

    display: flex;
    justify-content: center;
    align-items: center;

    span {
      font-size: 25px;
      line-height: 50px;
      height: 50px;
      color: #fff;

      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }

  @keyframes hover {
    from {
      transform: translateY(0px);
    }
    to {
      transform: translateY(-5px);
    }
  }
`;
