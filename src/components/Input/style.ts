import styled from 'styled-components'

export const InputContainer = styled.span`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    height: min(40px, 20vh);
    width: min(300px, 80vw);

    color: var(--ultra-light);
    input { 
        width: min(266px, 80vw);
        height: 100%;
        border: none;
        border: 1.5px solid rgb(140, 213, 241);
        border-right: none;    
        background-color: var(--ultra-dark);
        border-radius: min(10px, 1.5vw) 0 0 min(10px, 1.5vw);
        min-height: min(1.5rem, 1vh);
        color: var(--ultra-light);
        padding: 5px 0 5px 15px;
        outline: none;
        font-size: clamp(0.9rem, 1.5vw, 1.2rem);
    }

    .icon-container {
        display: flex;
        align-items: center;
        border: 1.5px solid rgb(140, 213, 241);
        border-radius: 0 min(10px, 1.5vw) min(10px, 1.5vw) 0;
        border-left: none;
        padding: min(9px, 2vw);
        height: 100%;
    }

    .icon {
        height: 80%;
        cursor: pointer;
    }
`