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
    <div className={classes.content}>
      <p className={classes.title}>{cardTitle}</p>
      <br/>
      {/* cardContent.population, usar assim */}
      <p><strong>Population:</strong>89731203</p> 
      <p><strong>Region:</strong>blabla</p>
      <p><strong>Capital:</strong>jusé</p>
    </div>
  </div>
)

SimpleCardComponent.propTypes = {
  classes: PropTypes.object,
  imgCard: PropTypes.node,
}

export const SimpleCard = withStyles(styles)(SimpleCardComponent)
