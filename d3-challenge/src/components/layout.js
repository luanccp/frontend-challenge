/* Dependencies */
import React, { useState } from "react"
import PropTypes from "prop-types"

/* Gatsby dependencies */
import { useStaticQuery, graphql } from "gatsby"

/* Themes Components */
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './root/globalStyle'
import * as themes from './root'

/* Components */
import Header from "@components/header/header"
import Content from '@components/content'


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

  /**
   * @brief change the theme between Dark and Light
   */
  function handleCurrentTheme() {
    const theme = currentTheme === 'darkTheme' ? 'lightTheme' : 'darkTheme'
    setCurrentTheme(theme)
  }

  return (
    <ThemeProvider theme={themes[currentTheme]}>
      <>
        <GlobalStyle />
        <Header siteTitle={'Where in the world?'} onChangeTheme={handleCurrentTheme} currentTheme={currentTheme} />
        <Content>{children}</Content>
      </>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
