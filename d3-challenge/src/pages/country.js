import React, {useEffect} from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Grid from '@material-ui/core/Grid'
import { FaArrowLeft } from 'react-icons/fa'
import { theme } from '../components/root'


import {Button} from '../components/button'
import ActionBar from "../components/action-bar"

import CountryProfileSection from '../components/content'
import DetailCard from "../components/card/detail-card";


const CountryPage = ({ location }) => {
  useEffect(() => {
    try{
      document.title = `${location.state.country.name} profile`
    }catch (err) {
      console.log("error ", err)
    }    
  }, []) // run just once


  return (
    <Layout>
      <ActionBar>
        <Link to='/'>
          <Button>
            <FaArrowLeft style={{marginRight:10}}/>
            Back
          </Button>
        </Link>
      </ActionBar>
      <DetailCard
         imgCard={location.state.country.flag}
         cardTitle={location.state.country.name}
         cardContent={location.state.country}>

      </DetailCard>
      {/* <div style={{display:'flex', flexDirection: 'row', justifyContent: 'flex-start', flexWrap:'wrap'}}>
        <img src={location.state.country && location.state.country.flag} style={{width:360, height:280}}></img>  
        <div style={{display:'flex', flexDirection: 'column', marginLeft: 28}}>
          <h2>{location.state.country && location.state.country.name}</h2>
          <p><strong>Native Name: </strong>{location.state.country && location.state.country.nativeName}</p>
          <p><strong>Population: </strong>{location.state.country && location.state.country.population}</p>
          <p><strong>Region: </strong>{location.state.country && location.state.country.region}</p>
          <p><strong>Sub Region: </strong>{location.state.country && location.state.country.subregion}</p>
          <p><strong>Capital: </strong>{location.state.country && location.state.country.capital}</p>
          <p><strong>Top Level Domain: </strong>{location.state.country && location.state.country.topLevelDomain}</p>
          <p><strong>Currencies: </strong>{location.state.country && location.state.country.currencies.map((curr) => curr.name + " | " )}</p>
          <p><strong>Languages: </strong>{location.state.country && location.state.country.languages.map((lan) => lan.name  + " | ")}</p>
        </div>
      </div> */}
    </Layout>
  )
}

export default CountryPage
