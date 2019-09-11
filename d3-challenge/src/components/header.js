import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import {theme} from './root'

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: theme.dark.backgroundColor,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 1440,
        padding: `1.45rem 1.0875rem`,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <button>DarkMode</button>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
