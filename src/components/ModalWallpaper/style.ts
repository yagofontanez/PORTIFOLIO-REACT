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

`;