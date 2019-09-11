import React, { useState, useEffect } from "react"

import { Link } from 'gatsby'

import Layout from "../components/layout"
import { SimpleCard } from "../components/card"
import * as Image from '@content/images/gatsby-icon.png'

import { theme } from '../components/root'
import ActionBar from '../components/action-bar'

const IndexPage = () => {

  const [countries, setCountries] = useState([])

  useEffect(async () => {
    const response = await fetch('https://restcountries.eu/rest/v2/all')
    const data = await response.json()

    setCountries(data)
  }, []) // executa somente uma vez

  useEffect(() => {
    document.title = `We have ${countries.length} countries!`
  }, [countries])

  return (
    <Layout>
      <ActionBar/>
      <div style={{display: 'flex', flexDirection:'row', flexWrap:'wrap', flexGrow: 1, justifyContent: 'space-between'}}>
        {countries.map(country => (
          <Link
            to="/country"
          >
            <SimpleCard
              imgCard={country.flag}
              cardTitle={country.name}
              cardContent={country}>
            </SimpleCard>
          </Link>
        ))}
      </div>
    </Layout>
  )
}

export default IndexPage
