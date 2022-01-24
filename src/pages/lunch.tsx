import React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import MenuSection from "../components/menu"

const LunchPage = () => (
  <Layout>
    <Seo title="Lunch Menu" />
    <h1>Lunch Menu</h1>
    <a href="#sandwiches">Sandwiches</a> <a href="#wraps">Wraps</a>{" "}
    <a href="#paninis">Paninis</a> <a href="#salads">Salads</a>{" "}
    <a href="#soup">Soup</a> <a href="#platters">Platters</a>
    <p>All prices do not include taxes</p>
    <MenuSection header="Sandwiches" price="$6.99" anchor="sandwiches">
      <li>Turkey and Hot Capocola</li>
      <li>Turkey and Prosciutto</li>
      <li>Turkey and Cheese</li>
      <li>Roast Beef and Cheese</li>
      <li>Ham and Turkey</li>
      <li>Ham and Cheese</li>
      <li>Ham and Chicken</li>
      <li>Chicken and Salami</li>
    </MenuSection>
    <p>Extra meat - $2.00</p>
    <p>Extra cheese - $1.00</p>
    <MenuSection header="Wraps" price="$6.99" anchor="wraps">
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
    </MenuSection>
    <MenuSection header="Paninis" price="$6.99" anchor="paninis">
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
    </MenuSection>
    <MenuSection header="Salads" anchor="salads">
      <li>Garden Salad</li>
      <p>Small: $5.99 / Large: $7.99</p>
      <li>Caesar Salad</li>
      <p>Small: $5.99 / Large: $7.99</p>
      <li>Fattoush Salad</li>
      <p>Small: $5.99 / Large: $8.99</p>
      <li>Greek Salad</li>
      <p>Small: $6.99 / Large: $8.99</p>
      <li>Chicken Caesar Salad</li>
      <p>Small: $7.99 / Large: $9.99</p>
    </MenuSection>
    <MenuSection header="Soup" anchor="soup">
      <p>Small: $3.99 / Large: $5.49</p>
    </MenuSection>
    <MenuSection header="Platters" price="$11.49" anchor="platters">
      <li>Club Sandwich Platter</li>
      <li>Smoked Meat Platter</li>
      <li>California Club Platter</li>
    </MenuSection>
  </Layout>
)

export default LunchPage
