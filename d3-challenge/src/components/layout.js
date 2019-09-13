import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { ThemeProvider } from 'styled-components'

import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import { FaSearch } from 'react-icons/fa'

import GlobalStyle from './root/globalStyle'

import ClickAway from './dropdown'
import Header from "./header"
import Content from './content'

import * as themes from './root'

const Layout = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState('darkTheme')
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  function handleCurrentTheme() {
    const theme = currentTheme === 'darkTheme' ? 'lightTheme' : 'darkTheme'
    setCurrentTheme(theme)
  }

  return (
    <ThemeProvider theme={themes[currentTheme]}>
      <>
        <GlobalStyle />
        <Header siteTitle={'Where in the world?'} onChangeTheme={handleCurrentTheme} />
        <Content>{children}</Content>
      </>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
