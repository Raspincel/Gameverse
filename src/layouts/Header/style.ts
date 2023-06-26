import styled from 'styled-components'

export const HeaderContainer = styled.header`
    width: min(450px, 60%);
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #222;
    color: var(--ultra-light);
    min-height: min(50px, 20vh);
    border-radius: 0 0 min(5vw, 15px) min(5vw, 15px);
    font-size: clamp(1.2rem, 1.5vw, 1.8rem);
    border: 2px solid rgb(140, 213, 241);
    border-top: none;
    padding: min(15px, 5vw);
    margin-bottom: min(10vh, 35px);
    
`