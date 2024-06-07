import styled from "styled-components";

export const Container = styled.div`
.input {
  margin: 30px;
  background: none;
  border: 1px solid #353535;
  outline: none;
  max-width: 200px;
  padding: 11px 23px;
  font-size: 16px;
  border-radius: 50px;
  color: #fff;
  box-shadow: rgb(136 136 136 / 17%) 0px -23px 25px 0px inset,
    rgb(81 81 81 / 23%) 0px -36px 30px 0px inset,
    rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px,
    rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px,
    rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
}

.input::placeholder {
  color: #fff;
}
`;