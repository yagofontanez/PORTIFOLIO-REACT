import styled from "styled-components";

export const Container = styled.div`
    width: 50vw;
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 8px;
    margin: 0 auto;
    height: 85vh;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 2rem;
    padding: 2rem;
    color: #fff;

    .experiencia-tdp {
        background-color: rgba(0, 0, 0, 0.8);
        border-radius: 8px;
        padding: 10px;
    }

    .parte-cima h1 {
        font-size: 22px;
    }

    .parte-baixo h2 {
        font-size: 18px;
        font-weight: 600;
    }
        
    .parte-baixo h2 span {
        color: #9C092F;
    }

    .parte-baixo p {
        font-size: 14px;
        font-weight: 300;
    }
`;