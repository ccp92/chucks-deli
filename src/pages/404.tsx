import { Link } from "gatsby"
import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <h1>Oops!</h1>
    <p>Looks like you've found a page that doesn't exist.</p>
    <p>
      Head back <Link to="/">here</Link> for more tasty food.
    </p>
  </Layout>
)

export default NotFoundPage
