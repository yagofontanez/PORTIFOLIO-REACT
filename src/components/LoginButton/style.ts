import styled from "styled-components";

export const Container = styled.div`
.container {
    width: 7em;
    height: 7em;
    position: relative;
  }
  
  .button {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 4px solid #090909;
    background-color: transparent;
    background-image: linear-gradient(145deg, #171717, #444245);
    box-sizing: border-box;
    box-shadow: inset 2px 2px 0 #7d7c7e, inset -2px -2px 0px #1c1c1c;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  
  .container input {
    display: none;
  }
  
  .button::before {
    position: absolute;
    content: "";
    width: 7.25em;
    height: 7.25em;
    border-radius: inherit;
    background-color: transparent;
    background-image: linear-gradient(145deg, #262626, #606060);
    z-index: -1;
    box-shadow: 11px 11px 22px #141414, -11px -11px 22px #525252;
  }
  
  .button .icon {
    width: 60px;
    height: 60px;
    display: inline-block;
  }
  
  .button .icon svg {
    height: 100%;
    width: 100%;
    fill: #a5a5a5;
  }
  
  .container input:checked + .button {
    box-shadow: inset -2px -2px 0 #5e5e5e, inset 2px 2px 0 #1c1c1c;
    border: 4px solid rgba(77, 124, 255, 0.281);
    animation: animeBorder 0.3s linear alternate-reverse infinite;
  }
  
  .container input:checked + .button .icon svg {
    fill: rgb(77, 124, 255);
    animation: animeFill 0.3s linear alternate-reverse infinite;
  }
  
  @keyframes animeFill {
    to {
      fill: rgba(77, 124, 255, 0.642);
    }
  }
  
  @keyframes animeBorder {
    to {
      border-color: rgba(77, 124, 255, 0.137);
    }
  }
  
`;