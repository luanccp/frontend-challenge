import styled from 'styled-components'

export const Card = styled.div`
  display: flex;
  flex-direction: row;
  padding: 6px 4px 6px;
  color: ${({ theme }) => theme && theme.textColor};
  flex-wrap:wrap;
`

export const CardImage = styled.img`
  object-fit: cover;
  min-width: 300px;
  min-height: 180px;
  width:500px;
  height:300px;
  margin-right:26px;
`

export const CardContent = styled.div`
  font-size: 16px;
  color: ${({ theme }) => theme && theme.textColor};

`

export const CardTitle = styled.p`
  margin-top: 12px;
  font-size: 28px;
  font-weight: 900;
  margin-bottom: 18px;
  color: ${({ theme }) => theme && theme.textColor};
`

export const CardDetail = styled.p`
  color: ${({ theme }) => theme && theme.textColor};
`

export const CardStrongDetail = styled.strong`
  color: ${({ theme }) => theme && theme.textColor};
`

export const BorderCountry = styled.span`
  background-color:${({ theme }) => theme && theme.elementColor};
  padding: 2px 12px;
  border: .1px groove ${({ theme }) => theme && theme.textColor};
`

