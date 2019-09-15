/* Dependencies */
import React, { useEffect } from "react"

/* Components */
import { Link } from "gatsby"
import Layout from "@components/layout"
import { Button } from '@components/button'
import ActionBar from "@components/action-bar"
import DetailCard from "@components/card/detail-card"

/* Icons */
import { FaArrowLeft } from 'react-icons/fa'

const CountryPage = ({ location }) => {
  useEffect(() => {
    try {
      document.title = `${location.state.country.name} profile`
    } catch (err) {
      console.log("error ", err)
    }
  }, [])

  return (
    <Layout>
      <ActionBar>
        <Link to='/'>
          <Button>
            <FaArrowLeft style={{ marginRight: 10 }} />
            Back
          </Button>
        </Link>
      </ActionBar>
      <DetailCard
        imgCard={(((location || {}).state || {}).country || {}).flag}
        cardTitle={(((location || {}).state || {}).country || {}).name}
        cardContent={(((location || {}).state || {}).country || {})}>
      </DetailCard>
    </Layout>
  )
}

export default CountryPage
