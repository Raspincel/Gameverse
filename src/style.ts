import styled from 'styled-components'

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;

    .options {
        display: flex;
        height: 170px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        gap: 20px;
        margin-bottom: min(30px, 10vh);
        width: min(500px, 90%);
        padding: 20px;
        border-radius: min(15px, 5vw);
        // border: 1px solid var(--light-gray);
        // background-color: var(--dark-gray);

    }

    .error-message {
        max-width: min(80%, 800px);
        font-size: clamp(0.8rem, 1.7vw, 1.2rem);
        color: var(--ultra-light);
        text-align: center;
    }

`