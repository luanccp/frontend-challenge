/* Dependecies */
import React from 'react'
import PropTypes from 'prop-types'

/* Components */
import { withStyles } from '@material-ui/core'

/* Styles */
import { styles } from './styles'

const SimpleCardComponent = ({ classes, imgCard, cardTitle, cardContent }) => (
  <div className={classes.card}>
    <img className={classes.image} src={imgCard} alt={cardTitle} />
    <p className={classes.content}>{cardContent}</p>
  </div>
)

SimpleCardComponent.propTypes = {
  classes: PropTypes.object,
  imgCard: PropTypes.node,
}

export const SimpleCard = withStyles(styles)(SimpleCardComponent)
