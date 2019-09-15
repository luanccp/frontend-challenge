import React from "react"
import t from "prop-types"
import { Link } from "gatsby"
import styled from 'styled-components'

import {Button} from '../button'

import {FaMoon} from 'react-icons/fa'
import { StyledHeader, Title, StyleLink } from './styles'


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
