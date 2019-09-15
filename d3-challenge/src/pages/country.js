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

  // const country = ((location || {}).state || {}).country
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
         imgCard={((location || {}).state || {}).country.flag}
         cardTitle={((location || {}).state || {}).country.name}
         cardContent={((location || {}).state || {}).country}>
      </DetailCard>
  </Layout>
  )
}

export default CountryPage
