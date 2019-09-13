import React from "react"
import t from "prop-types"

import { SearchSection } from './styles'

const ActionBar = ({ children }) => <SearchSection>{children}</SearchSection>

ActionBar.propTypes = {
  children: t.node.isRequired
}

export default ActionBar
