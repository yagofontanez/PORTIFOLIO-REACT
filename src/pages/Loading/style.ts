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
  flex-direction: column;
  gap: 4rem;
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
    z-index: 1;
  }

  .spinner {
    background-image: linear-gradient(rgb(186, 66, 255) 35%, rgb(0, 225, 255));
    width: 100px;
    height: 100px;
    animation: spinning82341 1.7s linear infinite;
    text-align: center;
    border-radius: 50px;
    filter: blur(1px);
    box-shadow: 0px -5px 20px 0px rgb(186, 66, 255), 0px 5px 20px 0px rgb(0, 225, 255);
    z-index: 2;
  }

  .spinner1 {
    background-color: rgb(36, 36, 36);
    width: 100px;
    height: 100px;
    border-radius: 50px;
    filter: blur(10px);
  }

  div {
    z-index: 2;
    position: relative;
  }

  .bem-vindo {
    color: white;
  }

  @keyframes spinning82341 {
    to {
      transform: rotate(360deg);
    }
  }
`;
