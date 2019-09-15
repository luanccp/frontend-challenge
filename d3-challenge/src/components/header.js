import React from "react"
import t from "prop-types"
import { Link } from "gatsby"
import styled from 'styled-components'

import {Button} from '../components/button'

import {FaMoon} from 'react-icons/fa'

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  flex-wrap:wrap;
  background-color: ${({ theme }) => theme && theme.elementColor};
  max-width: inherit;
  padding: 1.45rem 1.0875rem;
`

const Title = styled.h1`
  margin: 0;
`

const StyleLink = styled(Link)`
  color: ${({ theme }) => theme && theme.textColor};
  text-decoration: none;
`

const Header = ({ siteTitle, onChangeTheme, currentTheme }) => (
  <StyledHeader>
    <Title>
      <StyleLink to="/">{siteTitle}</StyleLink>
    </Title>
    <Button onClick={() => onChangeTheme()}>
      DarkMode <FaMoon size={12} style={{marginLeft:6, marginRight:7}}/>
      {currentTheme === 'lightTheme' ? "on": "off"}
    </Button>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: t.string,
}

//Setting a function as a props
Header.defaultProps = {
  siteTitle: '',
  onChangeTheme: () => {}
}

export default Header
