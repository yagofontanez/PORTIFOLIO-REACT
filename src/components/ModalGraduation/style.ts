import styled from "styled-components";

export const Container = styled.div`
    width: 50vw;
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 8px;
    margin: 0 auto;
    height: 85vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
    padding: 2rem;
    color: #fff;

    .container-texts {
        display: flex;
        flex-direction: column;
        text-align: center;
        gap: 1rem;
    }

    img, a {
        transition: 0.3s ease;
    }

    img:hover, a:hover {
        transform: scale(1.1);
    }

    a {
        color: #fff;
    }
`;