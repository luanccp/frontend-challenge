import styled from 'styled-components'

export const Card = styled.div`
  min-width: 300px;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  padding: 6px 4px 6px;
  background-color: ${({ theme }) => theme && theme.elementColor};
  color: ${({ theme }) => theme && theme.textColor};
  margin-bottom: 52px;
  box-shadow: 1px 8px 6px -6px black;

  :hover{
    box-shadow: 0px 1px 8px -3px ${({theme})=> theme && theme.textColor};
  }
`

export const CardImage = styled.img`
  object-fit: cover;
  width: 300px;
  height: 180px;
`

export const CardContent = styled.div`
  margin: 6px 24px 14px;
  font-size: 12px;
  background-color: ${({ theme }) => theme && theme.elementColor};
  color: ${({ theme }) => theme && theme.textColor};
`

export const CardTitle = styled.p`
  margin-top: 12px;
  font-size: 18px;
  font-weight: 900;
  margin-bottom: 4px;
  background-color: ${({ theme }) => theme && theme.elementColor};
  color: ${({ theme }) => theme && theme.textColor};
`

export const CardDetail = styled.p`
  color: ${({ theme }) => theme && theme.textColor};
`

export const CardStrongDetail = styled.strong`
  color: ${({ theme }) => theme && theme.textColor};
`
