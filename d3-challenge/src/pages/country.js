import React from "react"
import { Link } from "gatsby"


import Layout from "../components/layout"

const SecondPage = ({ location }) => {

  document.title = `${location.state.dataCountry.name} profile`

  return (
    <Layout>
      <h1>Hi from the second page</h1>
      <p>Welcome {location.state.dataCountry.name}</p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default SecondPage
