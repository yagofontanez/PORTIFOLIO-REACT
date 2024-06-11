import styled from "styled-components";
import backgroundLogin from "../../assets/backgroundLogin.png";

export const Container = styled.div`
  position: relative;
  overflow: hidden;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url(${backgroundLogin});
  background-size: cover;
  background-position: center;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    backdrop-filter: blur(10px);
    background-color: rgba(0, 0, 0, 0.7);
  }
`;

export const Photo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 1;
  gap: 2rem;

  .text-login {
    font-size: 16px;
    color: white;
    font-weight: 300;
  }


  .title-text {
    color: #fff;
    font-size: 18px;
    font-weight: 500;
  }

  .error-text {
    color: #cc0e0e;
  }
`;