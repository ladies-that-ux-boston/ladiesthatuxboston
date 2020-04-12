/* eslint-disable max-len */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Layout from "../components/layout";
import { useStaticQuery, graphql } from "gatsby";
import SEO from "../components/seo";
import Img from "gatsby-image";
import styles from "../styles/home.module.less";
import buttonStyles from "../styles/button.module.less";
// import Contact from '../components/contact';
// import Social from "../components/social";
// import Description from "../components/ltuxdesc";

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "boston-cityscape.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Img
      fluid={data.placeholderImage.childImageSharp.fluid}
      style={{}}
      alt="Ladies that UX Boston Cityscape"
    />
  );
};

const IndexPage = () => (
  <Layout className={styles.homeWrap}>
    <SEO title="Home" keywords={["gatsby", "application", "react"]} />
    <section className={styles.heroWrap}>
      <div className={styles.headline}>
        <h1 className="h2">
          Monthly UX meetup featuring female and non-binary speakers
        </h1>
        <p>
          Open to all genders and experience levels, we cover topics like
          design, research and career development
        </p>
        <a
          href="https://www.meetup.com/Ladies-That-UX-Boston/"
          alt="meetup"
          target="_blank"
          rel="noopener noreferrer"
          className={buttonStyles.button}
        >
          events
        </a>
      </div>
      <div className={styles.heroImage}>
        <Image />
      </div>
    </section>

    {/* <Description />
    <Social /> */}
  </Layout>
);

export default IndexPage;
