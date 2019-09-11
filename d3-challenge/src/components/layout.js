import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { FaSearch } from 'react-icons/fa';

import ClickAway from './dropdown'

import {theme} from './root'


import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={'Where in the world?'} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: '100%',
          padding: `1.0875rem 12.9rem`,
          backgroundColor:theme.dark.backgroundColor,
          color: theme.dark.textColor
        }}
      >
        <main>{children}</main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
