import styled from 'styled-components';

export const Container = styled.div`
  height: 60px;
  width: 100%;

  color: #fff;
  background-color: #ed1d24;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  img {
    width: 100px;
    height: auto;
  }

  @media (max-width: 600px) {
    ${(props) =>
      props.listPage
        ? 'height: 100px; align-items: flex-start; padding-top: 10px;'
        : null}
  }
`;

export const SearchBar = styled.div`
  position: absolute;

  top: 15px;
  right: 15px;

  height: 20px;
  background-color: #fff;

  padding: 5px;
  border-radius: 4px;

  input {
    outline: none;
    border: none;
  }

  @media (max-width: 600px) {
    top: 65px;
  }
`;

export const Page = styled.div`
  position: absolute;
  display: flex;
  align-items: baseline;

  top: 20px;
  left: 15px;

  h1 {
    font-size: 20px;
    color: #fff;
  }

  span {
    margin-left: 5px;
    font-size: 20px;
    color: #fff;
  }

  @media (max-width: 600px) {
    top: 70px;
  }
`;

export const Icon = styled.button`
  background-color: rgba(0, 0, 0, 0.1);
  padding: 3px;
  margin: 0 0 0 5px;
  border-radius: 4px;
  color: rgba(255, 255, 255, 0.8);

  border: none;
  cursor: pointer;
  outline: inherit;

  &:not(:disabled):hover {
    color: #fff;
    background-color: rgba(0, 0, 0, 0.05);
  }

  &:disabled {
    cursor: default;
    background-color: rgba(0, 0, 0, 0.1);
    color: rgba(0, 0, 0, 0.1);
  }
`;

export const BackButton = styled.button`
  background-color: rgba(0, 0, 0, 0.1);
  padding: 3px;
  border-radius: 4px;
  color: rgba(255, 255, 255, 0.8);

  position: absolute;

  top: 15px;
  left: 10px;

  font-size: 20px;

  border: none;
  cursor: pointer;
  outline: inherit;

  &:hover {
    color: #fff;
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

export const SaveButton = styled.div`
  position: absolute;
  display: flex;
  background-color: transparent;

  top: 15px;
  right: 10px;

  button {
    background-color: rgba(0, 0, 0, 0.1);
    padding: 3px;
    border-radius: 4px;
    color: #fff;

    font-size: 20px;
    margin-left: 5px;

    border: none;
    cursor: pointer;
    outline: inherit;

    &:not(:disabled):hover {
      color: #fff;
      background-color: rgba(0, 0, 0, 0.05);
    }

    &:disabled {
      cursor: default;
      background-color: rgba(0, 0, 0, 0.1);
      color: rgba(0, 0, 0, 0.1);
    }
  }
`;
