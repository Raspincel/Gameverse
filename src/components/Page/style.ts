import styled from 'styled-components'

export const PageContainer = styled.div`
    display: grid;

    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    
    justify-items: center;

    grid-gap: min(20px, 4vw);
    
    width: min(1200px, 100%);
    margin-bottom: 50px;
`

export const ErrorContainer = styled.span`
    display: flex;
    flex-direction: column;

    h1 {
        font-size: clamp(1rem, 3vw, 1.5rem);
    }
`