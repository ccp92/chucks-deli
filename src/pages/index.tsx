import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Menu" />
    <StaticImage src="../images/chucks.JPG" alt="Chuck's Deli & Convenience" style={{
      maxHeight: "20%"
    }} />
    <h1>Menu</h1>
    <p>
      <Link to="/breakfast">Breakfast</Link> <br />
      <Link to="/lunch/">Lunch</Link> <br />
      <Link to="/daily-specials/">Daily Specials</Link> <br />
      <Link to="/catering/">Catering</Link> <br />
    </p>
  </Layout>
)

export default IndexPage
