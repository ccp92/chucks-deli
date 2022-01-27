import * as React from "react"

import Layout from "../components/layout"
import MenuSection from "../components/menu"
import Seo from "../components/seo"

const BreakfastPage = () => (
  <Layout>
    <Seo title="Breakfast Menu" />
    <h1>Breakfast Menu</h1>
    <p>Sandwiches served on toast, bagel or english muffin</p>
    <MenuSection header="" anchor={""}>
      <li>One Egg Sandwich: $2.49</li>
      <li>Two Egg Western Sandwich: $4.49</li>
      <li>B.L.T: $3.99</li>
      <li>B.E.L.T: $4.99</li>
      <li>Swiss Breakfast: $4.39</li>
      <li>Croissant Sandwich with egg, ham & cheese: $4.39</li>
      <li>Grilled Cheese Sandwich: $3.99 (add bacon +$1.00)</li>
      <li>Bagel with Cream Cheese: $2.99</li>
      <li>Breakfast Platter: $7.99</li>
      <p>2 eggs with bacon, or ham, or sausage, home fries & coffee</p>
      <li>Home Fries: $2.49</li>
      <li>Panini Breakfast: $4.99</li>
      <li>Three Egg Western Omelette with Home Fries: $7.99</li>
      <p>Western, Vegetarian, or Three Cheese</p>
    </MenuSection>
  </Layout>
)

export default BreakfastPage
