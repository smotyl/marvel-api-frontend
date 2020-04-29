import styled from 'styled-components';

export const Container = styled.div`
  width: 190px;
  height: 50px;

  position: absolute;
  top: 70px;
  right: 0px;

  display: ${(props) => (props.mounted ? 'flex' : 'none')};
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  background-color: #2bce59;
  padding: 10px;

  border-radius: 4px 0px 0px 4px;

  animation: ${(props) => (props.visible ? '_slideIn' : '_slideOut')} 1s;
  /* animation: _slideIn 3s; */

  h1 {
    color: #fff;
    font-size: 16px;
  }

  span {
    font-size: 12px;
    color: #fff;
  }

  @keyframes _slideIn {
    from {
      transform: translateX(250px);
    }
    to {
      transform: translateX(0px);
    }
  }

  @keyframes _slideOut {
    from {
      transform: translateX(0px);
    }
    to {
      transform: translateX(250px);
    }
  }
`;
