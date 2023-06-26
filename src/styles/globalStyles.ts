import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle<{}>`
    :root {
        --ultra-dark: #333;
        --ultra-light: #EFEFEF;
        --light-gray: #DADADA;
        --dark-gray: #444444;
    }
    
    * {
        box-sizing: border-box;
        font-family: 'Inter';
    }

    img {
        max-width: 100%;
        height: 100%;
    }   

    body {
        background-color: var(--ultra-dark);
        margin: 0;

    }
`;