/* Dependecies */
import React from "react"
import t from "prop-types"

/* Components */
import {Button} from '../button'
import { StyledHeader, Title, StyleLink } from './styles'

/* Icons */
import {FaMoon} from 'react-icons/fa'

/**
 * @brief Component that build the header 
 * 
 * @param siteTitle title fot top header
 * @param onChangeTheme event to chagenge the theme
 * @param currentTheme theme being used 
 */
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
