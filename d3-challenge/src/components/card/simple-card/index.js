/* Dependecies */
import React from 'react'
import t from 'prop-types'

/* Components */
import { Card, CardImage, CardContent, CardTitle, CardDetail, CardStrongDetail } from './styles'


const SimpleCard = ({ imgCard, cardTitle, cardContent }) => (
  <Card>
    <CardImage src={imgCard} alt={cardTitle} />
    <CardContent>
      <CardTitle>{cardTitle}</CardTitle>
      <CardDetail>
        <CardStrongDetail>Population: </CardStrongDetail>{cardContent.population}
      </CardDetail>
      <CardDetail>
        <CardStrongDetail>Region: </CardStrongDetail>{cardContent.region}
      </CardDetail>
      <CardDetail>
        <CardStrongDetail>Capital: </CardStrongDetail>{cardContent.capital}
      </CardDetail>
    </CardContent>
  </Card>
)

SimpleCard.propTypes = {
  imgCard: t.string,
  cardTitle: t.string,
  cardContent: t.object
}

SimpleCard.defaultProps = {
  imgCard: '',
  cardTitle: '',
  cardContent: {}
}

export default SimpleCard 
