import styled from 'styled-components'

export const Button = styled.button`
    width:160px;
    color: ${props => `${props.fontColor}`};
    background-color: ${props => `${props.background}`};
    border: none;
    padding: 4px 8px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    box-shadow: 1px 2px 5px black;

    :hover{
        box-shadow: 0.5px 0.5px 10px ${props => `${props.fontColor}`};;
    }
`;