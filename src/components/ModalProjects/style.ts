import styled from "styled-components";

export const Container = styled.div`
    width: 50vw;
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 8px;
    margin: 0 auto;
    height: 85vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2rem;
    padding: 2rem;

    .container-project {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border: 0.2px solid #fff;
        width: 17rem;
        height: 13rem;
        gap: 10px;
        color: #fff;
        border-radius: 8px;
        transition: 0.3s ease;
        box-shadow: 2px 0px 27px -3px rgba(255,255,255,0.26);
        -webkit-box-shadow: 2px 0px 27px -3px rgba(255,255,255,0.26);
        -moz-box-shadow: 2px 0px 27px -3px rgba(255,255,255,0.26);
    }

    .container-project:hover {
        transform: scale(1.1);
    }

    .name-and-link {
        display: flex;
        gap: 10px;
        font-size: 12px;
        color: #fff;
        text-decoration: none;
        font-weight: 300;
    }
`;