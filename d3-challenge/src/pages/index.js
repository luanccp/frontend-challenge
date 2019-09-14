import React, { useCallback, useState, useEffect } from "react"

import { Link } from 'gatsby'

import Layout from "../components/layout"
import SimpleCard from "../components/card/simple-card"
import * as Image from '@content/images/gatsby-icon.png'

import { theme } from '../components/root'
import ActionBar from '../components/action-bar'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import { FaSearch } from 'react-icons/fa'

import api from '../api'

import ClickAway from '../components/dropdown'

import Input from '../components/input'

const IndexPage = () => {

  const [countries, setCountries] = useState([])
  const [filterCountries, setFilterCountries] = useState(countries)
  
  useEffect(() => {
    async function fetch() {
      try {
        const data = await api.getCountries()
        setCountries(data)
      } catch (error) {
        console.log(error)
      }
    }

    fetch()
  }, []) // run just once

  useEffect(() => {
    document.title = `We have ${countries.length} countries!`
    setFilterCountries(countries)
  }, [countries])

  //TODO: Criar funcao de debounce
  const handleFilterCountriesFilter = event => {
    const value = event.target.value

    if (!value.trim()) return setFilterCountries(countries)
      
    const newCountries = countries.filter(country => {
      let currentCountry = country.name.toLowerCase()
      let filter = value.toLowerCase()

      return currentCountry.includes(filter)
    })

    setFilterCountries(newCountries)
    
    console.log('filterCountries -->', filterCountries)
  }

  return (
    <Layout>
      <ActionBar>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <FaSearch />
          </Grid>
          <Grid item>
            <Input
              placeholder="Search for a country.."
              onChange={handleFilterCountriesFilter}
            />

          </Grid>
        </Grid>
        <ClickAway></ClickAway>
      </ActionBar>
      <div style={{display: 'flex', flexDirection:'row', flexWrap:'wrap', flexGrow: 1, justifyContent: 'space-between'}}>
        {filterCountries.map(country => (
          <Link
            key={country.name}
            to="/country"
            state={{ country }}
          >
            <SimpleCard
              imgCard={country.flag}
              cardTitle={country.name}
              cardContent={country}
            />
          </Link>
        ))}
      </div>
    </Layout>
  )
}

export default IndexPage
