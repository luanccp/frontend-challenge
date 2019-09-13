import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { FaArrowLeft } from 'react-icons/fa';
import { theme } from '../components/root'


import {Button} from '../components/button'


const SecondPage = ({ location }) => {

  document.title = `${location.state.dataCountry.name} profile`

  return (
    <Layout>
      <div className="searchSection" /*style={{backgroundColor:theme.dark.elementColor, color:theme.dark.textColor}}*/>
        <Grid container spacing={1} alignItems="flex-end">
          <Link to='/'>
            <Button /*background={theme.dark.elementColor }*/ fontColor={theme.dark.textColor}>
              <FaArrowLeft style={{marginRight:10}}/>
              Back
            </Button>
          </Link>
        </Grid>
      </div>
      <div style={{display:'flex', flexDirection: 'row', justifyContent: 'flex-start',}}>
        <img src={location.state.dataCountry.flag} style={{width:360, height:280}}></img>  
        <div style={{display:'flex', flexDirection: 'column', marginLeft: 28}}>
          <h2>{location.state.dataCountry.name}</h2>
          <p><strong>Native Name: </strong>{location.state.dataCountry.nativeName}</p>
          <p><strong>Population: </strong>{location.state.dataCountry.population}</p>
          <p><strong>Region: </strong>{location.state.dataCountry.region}</p>
          <p><strong>Sub Region: </strong>{location.state.dataCountry.subregion}</p>
          <p><strong>Capital: </strong>{location.state.dataCountry.capital}</p>
          <p><strong>Top Level Domain: </strong>{location.state.dataCountry.topLevelDomain}</p>
          <p><strong>Currencies: </strong>{location.state.dataCountry.currencies.map((curr) => curr.name + " | " )}</p>
          <p><strong>Languages: </strong>{location.state.dataCountry.languages.map((lan) => lan.name  + " | ")}</p>
        </div>
      </div>
    </Layout>
  )
}

export default SecondPage
