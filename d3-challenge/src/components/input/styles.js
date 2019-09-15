import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  position: relative;
`

export const StyleInput = styled.input`
  width: 30%;
  height: 50px;
  background-color: ${({theme}) => theme && theme.inputColor};
  text-decoration: none;
  color: ${({theme})=> theme && theme.textColor};
  -webkit-transition: width 0.4s ease-in-out;
  transition: width 0.4s ease-in-out;
  border-width:0px;
  border:none;
  background-position: 10px 10px;
  background-repeat: no-repeat;
  outline:none;
  padding-left: 14px;

  :focus {
    width: 100%;
  }
`
