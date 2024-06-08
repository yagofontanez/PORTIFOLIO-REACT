import styled from "styled-components";

export const Container = styled.div`
display: flex;
color: #fff;
background: rgb(49, 49, 83, 0.6);
width: 60%;
padding: 0.3rem 0.6rem;
border-radius: 8px;
transition: 0.3s ease;
cursor: pointer;

&:hover {
    background: rgb(49, 49, 83, 0.8);
}

.container-geral {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.container-geral h2 {
    font-size: 16px;
    font-weight: 200;
}


.Documents-btn {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: fit-content;
  height: 45px;
  border: none;
  padding: 0px 15px;
  border-radius: 5px;
  background-color: rgb(49, 49, 83, 0.3);
  gap: 10px;
  cursor: pointer;
  transition: all 0.3s;
}
.folderContainer {
  width: 40px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  position: relative;
}
.fileBack {
  z-index: 1;
  width: 80%;
  height: auto;
}
.filePage {
  width: 50%;
  height: auto;
  position: absolute;
  z-index: 2;
  transition: all 0.3s ease-out;
}
.fileFront {
  width: 85%;
  height: auto;
  position: absolute;
  z-index: 3;
  opacity: 0.95;
  transform-origin: bottom;
  transition: all 0.3s ease-out;
}
.text {
  color: white;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.5px;
}
.Documents-btn:hover .filePage {
  transform: translateY(-5px);
}
.Documents-btn:hover {
  background-color: rgb(58, 58, 94);
}
.Documents-btn:active {
  transform: scale(0.95);
}
.Documents-btn:hover .fileFront {
  transform: rotateX(30deg);
}

`;