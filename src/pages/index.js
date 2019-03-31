import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Contact from "../components/contact";
import Social from "../components/social";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <p>Our mission is to celebrate and empower women in UX. We're a meetup group for people interested in user experience and other design topics in the Boston area. Come learn from some of the amazing women in our field!</p>
    <Social />
    <Contact />
  </Layout>
)

export default IndexPage
