import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Menu" />
    <StaticImage
      src="../images/chucks.JPG"
      alt="Chuck's Deli & Convenience"
      style={{
        maxHeight: "20%",
      }}
    />
    <h1 style={{ paddingTop: "0.5em", textAlign: "center" }}>Menu</h1>
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <div
        style={{
          width: "50%",
          textAlign: "center",
          padding: "2em 0",
        }}
      >
        <Link to="/breakfast">Breakfast</Link> <br />
      </div>
      <div
        style={{
          width: "50%",
          textAlign: "center",
          padding: "2em 0",
        }}
      >
        <Link to="/lunch/">Lunch</Link> <br />
      </div>
      <div
        style={{
          width: "50%",
          textAlign: "center",
          padding: "2em 0",
        }}
      >
        <Link to="/daily-specials/">Daily Specials</Link> <br />
      </div>
      <div
        style={{
          width: "50%",
          textAlign: "center",
          padding: "2em 0",
        }}
      >
        <Link to="/catering/">Catering</Link> <br />
      </div>
    </div>
  </Layout>
)

export default IndexPage
