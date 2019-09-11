import React, { useState, useEffect } from "react"

import Layout from "../components/layout"
import { SimpleCard } from "../components/card"
import * as Image from '@content/images/gatsby-icon.png'

import { theme } from '../components/root'

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
      <div style={{display: 'flex', flexDirection:'row'}}>
        {countries.map(country => (
          <SimpleCard
            imgCard={Image}
            cardTitle={country.name}
            cardContent={country.pop}>
          </SimpleCard>
        ))}
      </div>
      <SimpleCard
        imgCard={Image}
        cardTitle={'TITULO'}
        cardContent={"LOREMIMPUSSSSUN"}>
      </SimpleCard>
    </Layout>
  )
}

export default IndexPage
