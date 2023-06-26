import styled from 'styled-components'

export const IconContainer = styled.span`

    .info {
        display: none;
        min-width: 100px;
        position: absolute;
        background-color: var(--ultra-dark);
        padding: 10px;
        border-radius: 10px;
        margin: 0;
        transform: translate(-90%, -180%);
        align-items: center;
        justify-content: center;
        border: 1px solid var(--ultra-light);

        span {
            color: var(--ultra-light);
            font-size: clamp(0.6rem, 0.8vw, 0.8rem);
            white-space: nowrap;
        }
    }
    &:hover {
        .info {
            display: flex;
        }
    }
`