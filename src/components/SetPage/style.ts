import styled from 'styled-components'

export const SetPageContainer = styled.div`
    font-size: clamp(0.8rem, 0.9vw, 1rem);
    display: flex;
    gap: min(5px, 2vw);
    min-width: 300px;
    align-items: center;
    justify-content: space-evenly;
    height: 20px;

    span {
        cursor: pointer;
        color: var(--ultra-light)
    }

    .arrow-icon {
        width: 15px;
        height: 15px;
        cursor: pointer;
        color: var(--ultra-light)
    }

    .arrow-icon:hover {
        width: 17px;
        height: 17px;
    }

    span:hover {
        font-size: clamp(0.9rem, 1vw, 1.1rem);
    }

`