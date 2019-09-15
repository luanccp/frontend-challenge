/* Dependecies */
import React from "react"
import t from "prop-types"

/* Components */
import { ActionBarSection } from './styles'

const ActionBar = ({ children }) => (
  <ActionBarSection>
    {children}
  </ActionBarSection>
)

ActionBar.propTypes = {
  children: t.node.isRequired
}

export default ActionBar
