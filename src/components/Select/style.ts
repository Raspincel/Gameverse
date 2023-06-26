import styled from 'styled-components'

export const SelectContainer = styled.span`
    display: flex;
    flex-align: center;
    justify-content: center;    
    width: min(300px, 80vw);
    .select {
        * {
            color: var(--ultra-light);
        }

        .react-select__control {
            border: 1.5px solid rgb(140, 213, 241);
            border-radius: min(10px, 1.5vw);
        }
        
        width: min(80vw, 300px);
        padding: 0;

        .react-select__option,
        .react-select__control,
        .react-select__menu-list {
            background-color: var(--ultra-dark);
            color: var(--ultra-light);
        }

        .react-select__option:hover{
            background-color: var(--dark-gray);
        }        
    };


`