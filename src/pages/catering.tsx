import * as React from "react"

import Layout from "../components/layout"
import MenuSection from "../components/menu"
import Seo from "../components/seo"

const CateringPage = () => (
  <Layout>
    <Seo title="Catering Menu" />
    <h1>Catering Menu</h1>
    <a href="#mains">Mains</a> <a href="#desserts">Desserts</a>{" "}
    <a href="#drinks">Drinks</a>
    <p>All prices do not include taxes</p>
    <MenuSection anchor="mains" header="Mains">
      <li>Breakfast Platter: $35.00</li>
      <p>Serves 10-15</p>
      <li>Fresh Fruit Platter: $35.00</li>
      <p>Serves 10-15</p>
      <li>Fresh Vegetable Platter: $35.00</li>
      <p>Serves 10-15</p>
      <li>Vegetable & Cheese Platter: $39.00</li>
      <p>Serves 10-15</p>
      <li>Cold Cut Platter: $39.00</li>
      <p>Serves 10-15</p>
      <li>Panini Platter: $75.00</li>
      <p>Serves 10-15</p>
      <li>Deli Sandwich Platter: $75.00</li>
      <p>Serves 10-15</p>
      <li>Wrap Platter: $75.00</li>
      <p>Serves 10-15</p>
      <li>Greek Salad: $3.00</li>
      <p>Per Person</p>
      <li>Garden Salad: $3.00</li>
      <p>Per Person</p>
    </MenuSection>
    <MenuSection header="Desserts" anchor="desserts">
      <li>Sweet Dessert Platter: $29.00</li>
      <p>Serves 10-15</p>
      <li>Gourmet Cookie Platter: $25.00</li>
      <p>Serves 10-15</p>
    </MenuSection>
    <MenuSection header="Drinks" anchor="drinks">
      <li>Pop, Juice or Water: $1.25</li>
      <p>Per Person</p>
      <li>Coffee: $1.25</li>
      <p>Per Person</p>
    </MenuSection>
  </Layout>
)

export default CateringPage
