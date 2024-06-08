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
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-end;
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
    background-color: rgba(0, 0, 0, 0.7);
  }

  .principal-container {
    z-index: 2;
  }

  .navbar {
    width: 100vw;
    height: 4rem;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    backdrop-filter: blur(15px);
  }

  .hamburger {
  cursor: pointer;
}

.hamburger input {
  display: none;
}

.hamburger svg {
  height: 3em;
  transition: transform 600ms cubic-bezier(0.4, 0, 0.2, 1);
}

.line {
  fill: none;
  stroke: white;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 3;
  transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
              stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
}

.line-top-bottom {
  stroke-dasharray: 12 63;
}

.hamburger input:checked + svg {
  transform: rotate(-45deg);
}

.hamburger input:checked + svg .line-top-bottom {
  stroke-dasharray: 20 300;
  stroke-dashoffset: -32.42;
}

.modal-navbar {
    width: 40rem;
    height: 30rem;
    animation: throwIn 0.5s ease-out;
    backdrop-filter: blur(15px);
    background-color: rgba(0, 0, 0, 0.7);
    border-radius: 8px;
    padding: 2.6rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: -15px;
}

.folders {
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 1.6rem;
    width: 100%;
  }

.icons {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 3rem;
    grid-row-gap: 6.5rem;
}

.container-language {
    transition: 0.3s ease;

    &:hover {
        transform: scale(1.2);
    }
}


  .modal-enter {
    animation: throwIn 0.5s ease-out forwards;
  }

  .modal-exit {
    animation: throwOut 0.5s ease-out forwards;
  }

  @keyframes throwIn {
    0% {
      transform: scale(0.5) rotate(-30deg);
      opacity: 0;
    }
    100% {
      transform: scale(1) rotate(0deg);
      opacity: 1;
    }
  }

  @keyframes throwOut {
    0% {
      transform: scale(1) rotate(0deg);
      opacity: 1;
    }
    100% {
      transform: scale(0.5) rotate(30deg);
      opacity: 0;
    }
  }

  #checkbox-input {
  display: none;
}

.switch {
  width: fit-content;
  padding: 10px;
  border-radius: 50px;
  z-index: 1;
  cursor: pointer;
  display: flex;
  transition: all 0.7s;
  background: #fff;
  box-shadow: 0px 0px 200px #fff;
}

#checkbox-input:checked + .switch {
 background-color: rgb(46, 46, 46);
  box-shadow: none;
}

`;