import React from "react"
import t from "prop-types"
import { Link } from "gatsby"
import styled from 'styled-components'

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;

  background-color: ${({ theme }) => theme && theme.elementColor};

  margin: 0 auto;
  max-width: 1440px;
  padding: 1.45rem 1.0875rem;
`

const Title = styled.h1`
  margin: 0;
`

const StyleLink = styled(Link)`
  color: ${({ theme }) => theme && theme.textColor};
  text-decoration: none;
`

const Header = ({ siteTitle, onChangeTheme }) => (
  <StyledHeader>
    <Title>
      <StyleLink to="/">{siteTitle}</StyleLink>
    </Title>
    <button onClick={() => onChangeTheme()}>DarkMode</button>
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
