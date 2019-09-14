import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Grid from '@material-ui/core/Grid';
import { FaArrowLeft } from 'react-icons/fa';
import { theme } from '../components/root'


import {Button} from '../components/button'


const CountryPage = ({ location }) => {

  document.title = `${location.state.country.name} profile`

  return (
    <Layout>
      <div className="searchSection" >
        <Grid container spacing={1} alignItems="flex-end">
          <Link to='/'>
            <Button>
              <FaArrowLeft style={{marginRight:10}}/>
              Back
            </Button>
          </Link>
        </Grid>
      </div>
      <div style={{display:'flex', flexDirection: 'row', justifyContent: 'flex-start',}}>
        <img src={location.state.country.flag} style={{width:360, height:280}}></img>  
        <div style={{display:'flex', flexDirection: 'column', marginLeft: 28}}>
          <h2>{location.state.country.name}</h2>
          <p><strong>Native Name: </strong>{location.state.country.nativeName}</p>
          <p><strong>Population: </strong>{location.state.country.population}</p>
          <p><strong>Region: </strong>{location.state.country.region}</p>
          <p><strong>Sub Region: </strong>{location.state.country.subregion}</p>
          <p><strong>Capital: </strong>{location.state.country.capital}</p>
          <p><strong>Top Level Domain: </strong>{location.state.country.topLevelDomain}</p>
          <p><strong>Currencies: </strong>{location.state.country.currencies.map((curr) => curr.name + " | " )}</p>
          <p><strong>Languages: </strong>{location.state.country.languages.map((lan) => lan.name  + " | ")}</p>
        </div>
      </div>
    </Layout>
  )
}

export default CountryPage
