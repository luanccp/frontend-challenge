import styled from 'styled-components'
import {device} from '../root/devices'

export default styled.main`
  margin: 0 auto;
  max-Width: 100%;
  background-color: ${({ theme }) => theme && theme.backgroundColor};
  color: ${({ theme }) => theme && theme.textColor};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  
  @media ${device.mobile} {  
    padding: 1.0875rem 2.9rem;
  }

  @media ${device.desktop} {
    padding: 1.0875rem 12.9rem;
  }
`
