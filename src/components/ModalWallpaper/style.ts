import styled from "styled-components";

export const Container = styled.div`
    width: 50vw;
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 8px;
    margin: 0 auto;
    height: 85vh;
    gap: 4rem;
    padding: 2rem;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .container-examples-wpp {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        gap: 1rem;
    }

    .container-examples-wpp img {
        border-radius: 15px;
        transition: 0.4s ease;
    
        &:hover {
            transform: scale(1.1);
        }
    }


    .custum-file-upload {
  height: 80px;
  width: 180px;
  display: flex;
  flex-direction: column;
  align-items: space-between;
  gap: 20px;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  border: 2px dashed #e8e8e8;
  background-color: #212121;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0px 48px 35px -48px #e8e8e8;
}

.custum-file-upload .icon {
  display: flex;
  align-items: center;
  justify-content: center;
}

.custum-file-upload .icon svg {
  height: 20px;
  fill: #e8e8e8;
}

.custum-file-upload .text {
  display: flex;
  align-items: center;
  justify-content: center;
}

.custum-file-upload .text span {
  font-weight: 400;
  color: #e8e8e8;
  font-size: 11px;
  white-space: nowrap;
}

.custum-file-upload input {
  display: none;
}

.input-select-file {
    position: relative;
    top: -2.7rem;
}
`;