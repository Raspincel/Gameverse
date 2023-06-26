import styled from 'styled-components'

export const CardContainer = styled.div`
    width: 350px;
    min-height: 320px;
    padding: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: min(20px, 4vw);
    border-radius: min(20px, 4vw);
    border: 2px solid rgb(140, 213, 241);
    
    background-color: #222;
    position: relative;

    img {
        width: min(3000px, 100%);
        aspect-ratio: 250/141.1;
        border-radius: min(20px, 4vw);
    }

    .icons-container {
            display: flex;
            gap: 8px;
            position: absolute;
            left: auto;
            right: auto;
            
            top: 5px;
            align-items: center;
            justify-content: center;
        }

    .bottom {
        position: relative;
        display: flex;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;


        .title {
            margin: 0;
            padding: 0;
            font-size: clamp(1rem, 2vw, 1.5rem);
            text-align: center;
            color: var(--ultra-light);
        }

        .grid-wrapper {
            display: grid;
            grid-template-rows: 0fr;
            transition: 0.15s linear;
            position: absolute;
            top: -50%;
            width: 350px;
            padding: min(25px, 5vw);
            margin-top: 50px;
            border-radius: 0 0 min(20px, 4vw) min(20px, 4vw);
            z-index: -1;
        }

        &:hover {
            .grid-wrapper {
                z-index: 5;
                background-color: #222;
                grid-template-rows: 1fr;
                border: 2px solid rgb(140, 213, 241);
                border-top: none;
            }

            .title {
                z-index: 99;
            }

            .game-infos {
                overflow: visible;
            }
        }


        .game-infos {
            overflow: hidden;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            width: 100%;
            margin-bottom: 10px;
            color: var(--ultra-light);
            font-size: clamp(0.7rem, 1.2vw, 1.2rem);

            .game-description {
                text-align: justify;
            }

            .section {
                margin-bottom: 4px;
            }
        }

    }

    .card-footer {
        color: var(--ultra-light);
        font-size: clamp(0.85rem, 1.4vw, 1.3rem);
        text-decoration: none;
        
        position: absolute;
        bottom: min(20px, 5vh);
      

        &:hover {
                font-size: clamp(0.95rem, 1.5vw, 1.4rem);
        }
    }

`