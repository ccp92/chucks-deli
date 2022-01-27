import * as React from "react"

import Layout from "../components/layout"
import MenuSection from "../components/menu"
import Seo from "../components/seo"

const DailySpecialsPage = () => (
  <Layout>
    <Seo title="Daily Specials" />
    <h1>Daily Special</h1>
    <MenuSection header="Panini Sandwich" anchor="panini">
      <p>
        Panini Sandwich with soup or salad & canned soft drink: $10.62 + tax
      </p>
    </MenuSection>
  </Layout>
)

export default DailySpecialsPage
