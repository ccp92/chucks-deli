import React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Menu from "./menu"

const LunchPage = () => (
  <Layout>
    <Seo title="Lunch" />
    <h1>Lunch</h1>
    <p>All Prices do not include taxes</p>
    <Menu header="Sandwiches" price="$6.99">
      <li>Turkey and Hot Capocola</li>
      <li>Turkey and Prosciutto</li>
      <li>Turkey and Cheese</li>
      <li>Roast Beef and Cheese</li>
      <li>Ham and Turkey</li>
      <li>Ham and Cheese</li>
      <li>Ham and Chicken</li>
      <li>Chicken and Salami</li>
    </Menu>
    <p>Extra meat - $2.00</p>
    <p>Extra cheese - $1.00</p>

    <Menu header="Wraps" price="$6.99">
      <li>Chicken Salad</li>
      <li>Tuna Salad</li>
      <li>Egg Salad</li>
      <li>Grilled Chicken</li>
      <li>Ham and Cheese</li>
      <li>Turkey and Cheese</li>
      <li>B.L.T.</li>
      <li>Vegetarian</li>
      <li>Turkey Club</li>
      <li>Chicken Caeser</li>
    </Menu>

    <Menu header="Paninis" price="$6.99">
      <li>Chicken Bacon</li>
      <li>Chicken with Pickled Vegetables</li>
      <li>Croque Monsieur</li>
      <li>Monte Cristo</li>
      <li>Italian</li>
      <li>Roast Beef</li>
      <li>Pulled Pork</li>
      <li>Smoked Meat</li>
      <li>Mediterranean</li>
      <li>Chuck's Steak</li>
      <li>Chicken Club</li>
      <li>Pulled Chicken</li>
      <li>Brie Cheese</li>
      <li>Grilled Vegetables</li>
      <li>Chicken Parmesan</li>
    </Menu>
  </Layout>
)

export default LunchPage
