/* eslint-disable max-len */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import classnames from "clsx";
import styles from "../styles/home.module.less";
import buttonStyles from "../styles/button.module.less";
import EmailSignup from "../components/emailsignup";
import MediumFeed from "../components/mediumfeed";

const IndexPage = ({ data }) => (
  <Layout className={styles.homeWrap}>
    <SEO title="Home" keywords={["ltux boston", "ladies that ux", "ux"]} />

    <section className={styles.heroWrap}>
      <div className={styles.headline}>
        <h1 className="mg-btm-md white-trnsp-bg">
          Monthly UX meetup featuring female and non-binary speakers
        </h1>
        <p className="mg-btm-md white-trnsp-bg">
          Open to all genders and experience levels, we cover topics like
          design, research and career development
        </p>
        <a
          href="https://www.meetup.com/Ladies-That-UX-Boston/"
          alt="meetup"
          target="_blank"
          rel="noopener noreferrer"
          className={classnames(
            buttonStyles.button,
            buttonStyles.link,
            buttonStyles.primary
          )}
        >
          Events
        </a>
      </div>
      <div className={styles.heroImage}>
        <img
          src={"/bostoncityvector.svg"}
          alt="Boston cityscape illustration"
          aria-hidden="true"
        />
      </div>
    </section>
    <section className={styles.emailSignupWrap}>
      <h2 className="mg-btm-md">Join our monthly newsletter</h2>
      <p className="mg-btm-md">
        We’ll send you job listings, news about upcoming events and our #WCW
      </p>
      <EmailSignup />
    </section>
    <MediumFeed data={data} />
  </Layout>
);

export default IndexPage;

export const pageQuery = graphql`
  query {
    allMediumPost(limit: 3, sort: { fields: [createdAt], order: DESC }) {
      edges {
        node {
          id
          title
          author {
            name
          }
          virtuals {
            previewImage {
              imageId
            }
          }
          uniqueSlug
        }
      }
    }
  }
`;
