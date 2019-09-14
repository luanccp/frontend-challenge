import styled from 'styled-components'

export const Button = styled.button`
    width:160px;
    color: ${({ theme }) => theme && theme.textColor};
    background-color: ${({ theme }) => theme && theme.backgroundColor};
    border: none;
    padding: 4px 8px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    box-shadow: 1px 2px 5px black;

    :hover{
        box-shadow: 0.5px 0.5px 10px ${({ theme }) => theme && theme.textColor};
    }
`;