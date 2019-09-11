import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { FaSearch } from 'react-icons/fa';

import ClickAway from './dropdown'


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
          maxWidth: 1440,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent:'space-between'
        }}
      >
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <FaSearch />
          </Grid>
          <Grid item>
            <TextField id="input-with-icon-grid" placeholder="Search for a country.." />
          </Grid>
        </Grid>

        <ClickAway></ClickAway>
      </div>
      <main>{children}</main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
