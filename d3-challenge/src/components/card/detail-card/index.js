/* Dependecies */
import React from 'react'
import t from 'prop-types'

/* Components */
import { Card, CardImage, CardContent, CardTitle, CardDetail, CardStrongDetail, BorderCountry } from './styles'


const DetailCard = ({ imgCard, cardTitle, cardContent }) => {

  return (
    <Card>
      <CardImage src={imgCard} alt={cardTitle} />
      <CardContent>
        <CardTitle>{cardTitle}</CardTitle>
        <CardDetail>
          <CardStrongDetail>Native Name : </CardStrongDetail>{cardContent.nativeName}
        </CardDetail>
        <CardDetail>
          <CardStrongDetail>Population : </CardStrongDetail>{cardContent.population}
        </CardDetail>
        <CardDetail>
          <CardStrongDetail>Region : </CardStrongDetail>{cardContent.region}
        </CardDetail>
        <CardDetail>
          <CardStrongDetail>Sub Region : </CardStrongDetail>{cardContent.subregion}
        </CardDetail>
        <CardDetail>
          <CardStrongDetail>Capital : </CardStrongDetail>{cardContent.capital}
        </CardDetail>
        <CardDetail>
          <CardStrongDetail>Top Level Domain : </CardStrongDetail>{cardContent.topLevelDomain}
        </CardDetail>
        <CardDetail>
          <CardStrongDetail>Currencies : </CardStrongDetail>
          {((cardContent || {}).currencies || []).map((curr) => curr ? curr.name + ".": "" )}
        </CardDetail>
        <CardDetail>
          <CardStrongDetail>Languages : </CardStrongDetail>
          {((cardContent || {}).languages || []).map((lan) => lan.name  + ".")}
        </CardDetail>
        <CardDetail>
          <CardStrongDetail>{((cardContent || {}).borders || []).length !== 0 ? "Borders Coutries : ":""} </CardStrongDetail>
          {((cardContent || {}).borders || []).map((bCoutry) => <BorderCountry>{bCoutry}</BorderCountry>)}
        </CardDetail>
      </CardContent>
    </Card>
  )
}

DetailCard.propTypes = {
  imgCard: t.string,
  cardTitle: t.string,
  cardContent: t.object
}

DetailCard.defaultProps = {
  imgCard: '',
  cardTitle: '',
  cardContent: {}
}

export default DetailCard 
