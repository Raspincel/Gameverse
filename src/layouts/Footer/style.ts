import styled from 'styled-components'

export const FooterContainer = styled.footer`
    margin-top: min(40px, 20vh);
    width: min(2100px, 100vw);
    padding: min(30px, 10vw);
    background-color: #222;
    color: var(--ultra-light);
    
    display: flex;
    align-items: center;
    justify-content: space-between;

    .author-infos,
    .project-infos {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .project-infos {
        padding: min(50px, 5vw);
        text-align: justify;
        font-size: clamp(1rem, 1.3vw, 1.5rem);
        width: min(700px, 70%);
    }
    
    a {
        text-decoration: none;
        color: var(--ultra-light);
        cursor: pointer;
    }

    .icon-section {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 10px;
        
        font-size: clamp(1rem, 1.3vw, 1.5rem);

        .footer-icon {
            width: 25px;
            height: 25px;
            transition: 0.15s linear;
        }

        .footer-icon:hover {
            width: 30px;
            height: 30px;
        }
    }

    @media (max-width: 599px) {
        flex-direction: column;

        .icon-section {
            justify-content: center;
        }
    }

`