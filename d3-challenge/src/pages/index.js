import React, { useState, useEffect } from "react"

import { Link } from 'gatsby'

import Layout from "../components/layout"
import SimpleCard from "../components/card/simple-card"

import ActionBar from '../components/action-bar'
import { FaSearch } from 'react-icons/fa'

import api from '../api'


import Input from '../components/input'

import { SearchSection, NavbarDropdown, NavbarDropdownItem } from '../components/action-bar/styles'

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

  
  const handleFilterCountriesFilter = event => {
    const value = event.target.value

    if (!value.trim()) return setFilterCountries(countries)
      
    const newCountries = countries.filter(country => {
      let currentCountry = country.name.toLowerCase()
      let filter = value.toLowerCase()

      return currentCountry.includes(filter)
    })

    setFilterCountries(newCountries)
    document.title = `We have ${filterCountries.length} countries!`
  }

  const handleFilterByRegion = (event) => {
    const region = event.target.value
    
    if (region!="") {
      const countriesByRegion = countries.filter(country => {
        if (country.region == region) return country
      })
      
      document.title = `We have ${countriesByRegion.length} countries!`

      return setFilterCountries(countriesByRegion)
    }else{ return setFilterCountries(countries)}
  }

  return (
    <Layout>
      <ActionBar>
        <SearchSection>
          <FaSearch />
          <Input
            placeholder="Search for a country.."
            onChange={handleFilterCountriesFilter}
          />
        </SearchSection>
        <NavbarDropdown onChange={handleFilterByRegion}>
          <NavbarDropdownItem value="">Filter by region</NavbarDropdownItem>
          <NavbarDropdownItem value="Africa">Africa</NavbarDropdownItem>
          <NavbarDropdownItem value="Americas">Americas</NavbarDropdownItem>
          <NavbarDropdownItem value="Asia">Asia</NavbarDropdownItem>
          <NavbarDropdownItem value="Europe">Europe</NavbarDropdownItem>
          <NavbarDropdownItem value="Oceania">Oceania</NavbarDropdownItem>
        </NavbarDropdown> 
      </ActionBar>
      <div style={{display: 'flex', flexDirection:'row', flexWrap:'wrap', alignItems:'center'}}>
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
