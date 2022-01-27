import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const BreakfastPage = () => (
  <Layout>
    <Seo title="About Us" />
    <h1>About Us</h1>
    <h3>Welcome to Chuck's Deli & Convenience</h3>
    <p>
      Chuck's Deli & Convenience and Brown's Cleaners made their début in the
      Train Yards in 2007. It was a momentous occasion — one that required that
      we faithfully put our savings into what seemed like a fruitless
      run-of-the-mill, over-the-counter deli along with a dry cleaning service.
      With little more than a few good menu items, we began our journey into a
      brand-new world. But lo and behold, in a year of introducing the famous
      Chuck's Panini, our panini sandwich spoke for itself.
    </p>

    <p>
      What makes our food stand out? For starters, there are no fryers on the
      premises. All of our food is baked, which means that you’ll get only the
      highest-quality foods. Daily fresh bread is delivered early in the morning
      to accommodate the famous freshly baked chicken, filet mignon steak and
      numerous other delights, including delicious samosas and spinach pies —
      all prepared by the loving hands of our ladies in the kitchen.
    </p>

    <p>
      If you haven’t tried our food, now’s the time. Maybe you, too, will join
      the ranks of the faithful. And, you can drop off your cleaning at the same
      time.
    </p>

    <StaticImage
      src="../images/chucks_about_2.JPG"
      alt="Chuck's Deli & Convenience food choices"
    />

    <StaticImage
      src="../images/chucks_about_1.JPG"
      alt="Chuck's Deli & Convenience employees"
    />
  </Layout>
)

export default BreakfastPage
