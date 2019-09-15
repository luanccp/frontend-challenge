import styled from 'styled-components'

export const SearchSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color:${({theme}) => theme && theme.elementColor};
  padding: 0px 24px;
  margin-bottom: 12px;
`
export const ActionBarSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 28px 0px;
  background-color:${({theme}) => theme && theme.backgroundColor};
  flex-wrap:wrap;
  flex-grow: 1;
`
export const NavbarDropdown = styled.select`
  background-color: ${({theme})=> theme && theme.elementColor};
  width: 300px; 
  height:54px; 
  font-size:18px; 
  padding:13px 20px 13px 12px; 
  color:${({theme})=> theme && theme.textColor}; 
  border: 0px;
  outline:0px;
`

export const NavbarDropdownItem = styled.option`
  color: ${({theme})=> theme && theme.textColor};
  font-size: 12px;
  text-decoration: none;
  
  :hover{
    border: 0.1px solid ${({theme})=> theme && theme.textColor};
  }
`