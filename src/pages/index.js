import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

import { HomeHeader } from '../utils'
import img from '../images/bcg/homeBcg.jpeg'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <HomeHeader img={img}>Hello from home header</HomeHeader>
  </Layout>
)

export default IndexPage
