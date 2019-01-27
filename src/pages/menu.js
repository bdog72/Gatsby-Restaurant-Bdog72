import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

import { PageHeader } from '../utils'
import menuImg from '../images/bcg/menuBcg.jpeg'

const MenuPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <PageHeader img={menuImg}>
      <h1>Hello From Menu</h1>
    </PageHeader>
  </Layout>
)

export default MenuPage
