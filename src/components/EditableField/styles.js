import styled from 'styled-components';

export const Input = styled.textarea`
  resize: both;
  margin-top: 10px;
  padding: ${(props) => (props.isTitle ? '3px' : '10px')};
  outline: none;
  border: none;
  border-radius: 2px;

  background-color: rgba(255, 255, 255, 0.1);
  color: #fff;

  resize: vertical;

  font-size: ${(props) => (props.isTitle ? '20px' : '12px')};
  width: ${(props) => (props.isTitle ? '200px' : '400px')};
  height: ${(props) => (props.isTitle ? '25px' : '60px')};
`;
