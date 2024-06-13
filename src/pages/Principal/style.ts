import styled from "styled-components";
import backgroundLogin from "../../assets/backgroundLogin.png";

export const Container = styled.div<{ background?: string }>`
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
  background: ${({ background }) => background ? `url(${background})` : `${backgroundLogin}`};
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

.tooltip {
  position: relative;
  display: inline-block;
  cursor: pointer;
}

.tooltip button {
  background-color: transparent;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 22px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s ease-out;
}

.tooltip button:hover {
  transform: scale(1.05);
}

.tooltip:hover .tooltiptext {
  visibility: visible;
  opacity: 1;
}

.tooltiptext {
  visibility: hidden;
  width: 160px;
  background-color: #333;
  color: #fff;
  text-align: center;
  border-radius: 8px;
  padding: 5px;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  margin-left: -80px;
  opacity: 0;
  transition: opacity 0.3s;
}

.tooltiptext::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #333 transparent transparent transparent;
}
.radio-form {
  display: block;
  margin: auto;
  max-width: 10em;
  position: relative;
  top: -25px;
  left: 20px;
}

.radio-form input {
  position: fixed;
  top: -1.5em;
  left: -1.5em;
}

.radio-form label {
  cursor: pointer;
  display: block;
  font-weight: bold;
  text-shadow: 0 0.1em 0.1em rgba(0, 0, 0, 0.2);
  transition: color 0.2s cubic-bezier(0.45, 0.05, 0.55, 0.95);
}

.radio-form label:not(:last-of-type) {
  margin-bottom: 1.5em;
}

.radio-form label span {
  box-shadow: 0 0 0 0.2em currentColor inset, 0 0.2em 0.2em rgba(0, 0, 0, 0.2), 0 0.3em 0.2em rgba(0, 0, 0, 0.2) inset;
  display: inline-block;
  margin-right: 0.5em;
  vertical-align: bottom;
  border-radius: 50%;
  width: 1.5em;
  height: 1.5em;
  transition: transform 0.2s cubic-bezier(0.5, 0, 0.5, 2), box-shadow 0.2s cubic-bezier(0.45, 0.05, 0.55, 0.95), color 0.2s cubic-bezier(0.45, 0.05, 0.55, 0.95);
}

.radio-form input:checked + label,
.radio-form input:checked + label span {
  color: #255ff4;
}

.radio-form input:checked + label,
.radio-form input:checked + label span {
  transition-delay: 0.4s;
}

.radio-form label span {
  transform: scale(1.2);
}

.radio-form .worm {
  top: 0.375em;
  left: 0.375em;
  position: absolute;
}

.radio-form .worm__segment {
  position: absolute;
  top: 0;
  left: 0;
  width: 0.75em;
  height: 0.75em;
  border-radius: 50%;
  transition: transform 0.4s cubic-bezier(0.45, 0.05, 0.55, 0.95);
}

.radio-form .worm__segment:before {
  animation-duration: 0.4s;
  animation-timing-function: cubic-bezier(0.45, 0.05, 0.55, 0.95);
  background: currentColor;
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 50%;
}

.radio-form .worm__segment:first-child:before,
.radio-form .worm__segment:last-child:before {
  box-shadow: 0 0 1em 0 currentColor;
}

@keyframes hop1 {
  from,
  to {
    transform: translateX(0);
  }

  50% {
    transform: translateX(-1.5em);
  }
}

@keyframes hop2 {
  from,
  to {
    transform: translateX(0);
  }

  50% {
    transform: translateX(-1.5em);
  }
}

@keyframes hop3 {
  from,
  to {
    transform: translateX(0);
  }

  50% {
    transform: translateX(-1.5em);
  }
}

.radio-form input:nth-of-type(1):checked ~ .worm .worm__segment {
  transform: translateY(0);
}

.radio-form input:nth-of-type(1):checked ~ .worm .worm__segment:before {
  animation-name: hop1;
}

.radio-form input:nth-of-type(2):checked ~ .worm .worm__segment {
  transform: translateY(3em);
}

.radio-form input:nth-of-type(2):checked ~ .worm .worm__segment:before {
  animation-name: hop2;
}

.radio-form input:nth-of-type(3):checked ~ .worm .worm__segment {
  transform: translateY(6em);
}

.radio-form input:nth-of-type(3):checked ~ .worm .worm__segment:before {
  animation-name: hop3;
}

@media screen and (prefers-color-scheme: dark) {
  body {
    background: #17181c;
    color: #e3e4e8;
  }

  .radio-form input:checked + label,
  .radio-form input:checked + label span,
  .radio-form .worm__segment:before {
    color: #5583f6;
  }
}
`;