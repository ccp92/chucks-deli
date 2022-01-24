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
        <Link
          to="/breakfast"
          style={{ fontWeight: "bold", fontSize: "1.5rem" }}
        >
          Breakfast
        </Link>
      </div>
      <div
        style={{
          width: "50%",
          textAlign: "center",
          padding: "2em 0",
        }}
      >
        <Link to="/lunch/" style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
          Lunch
        </Link>
      </div>
      <div
        style={{
          width: "50%",
          textAlign: "center",
          padding: "2em 0",
        }}
      >
        <Link
          to="/daily-specials/"
          style={{ fontWeight: "bold", fontSize: "1.5rem" }}
        >
          Daily Specials
        </Link>
      </div>
      <div
        style={{
          width: "50%",
          textAlign: "center",
          padding: "2em 0",
        }}
      >
        <Link
          to="/catering/"
          style={{ fontWeight: "bold", fontSize: "1.5rem" }}
        >
          Catering
        </Link>
      </div>
    </div>
  </Layout>
)

export default IndexPage
