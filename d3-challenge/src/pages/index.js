import React from "react"

import Layout from "../components/layout"
import {SimpleCard} from "../components/card"
import * as Image from '@content/images/gatsby-icon.png'

import {theme} from '../components/root'

const IndexPage = () => (
  <Layout>
    <SimpleCard
      imgCard={Image}
      cardTitle={'TITULO'}
      cardContent={"LOREMIMPUSSSSUN"}>
    </SimpleCard>
  </Layout>
)

export default IndexPage
