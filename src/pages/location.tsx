import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const LocationPage = () => (
  <Layout>
    <Seo title="Breakfast" />
    <h1>How to find us</h1>
    <h2>Location</h2>
    <p style={{ marginBottom: "0.5em" }}>We are located at:</p>
    <p>
      12-100 Trainyards Drive Ottawa,
      <br /> Ontario <br /> K1G 3S5
    </p>
    <h2>Contact Us</h2>
    <p>
      We can be reached by: <br />
      Telephone : <a href="tel:613-860-1000">(613) 860-1000</a> <br />
      Email : <a href="mailto:chucksdeli@hotmail.com">chucksdeli@hotmail.com</a>
    </p>
    <p>
      Store Hours:
      <br />
      Monday: 7:30am - 5:00pm
      <br />
      Tuesday: 7:30am - 5:00pm
      <br />
      Wednesday: 7:30am - 5:00pm
      <br />
      Thursday: 7:30am - 5:00pm
      <br />
      Friday: 7:30am - 5:00pm
      <br />
      Saturday: 8:00am - 4:00pm
      <br />
      Sunday: Closed
    </p>
  </Layout>
)

export default LocationPage
