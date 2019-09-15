import styled from 'styled-components'
import { device } from '../root/devices'

/* Component */
import { Link } from 'gatsby'


export const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    flex-wrap:wrap;
    background-color: ${({ theme }) => theme && theme.elementColor};
    max-width: inherit;
    padding: 1.45rem 1.0875rem;
`

export const Title = styled.h1`
    margin: 0;
    
    @media ${device.mobile} {  
        font-size: 22px;
    }

    @media ${device.desktop} {
        font-size:48px;
    }
`

export const StyleLink = styled(Link)`
    color: ${({ theme }) => theme && theme.textColor};
    text-decoration: none;
`
