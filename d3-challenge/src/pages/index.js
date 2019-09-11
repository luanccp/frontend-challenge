import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import {SimpleCard} from "../components/card"
import * as Image from '@content/images/gatsby-icon.png'

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
