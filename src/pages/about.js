/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import classnames from "clsx";
import styles from "../styles/about.module.less";

const AboutPage = () => (
  <Layout className={styles.aboutWrap}>
    <SEO title="About Us" keywords={["ltux boston", "ladies that ux", "ux"]} />

    <section className={styles.heroWrap}>
      <div className={styles.headline}>
        <h1 className="mg-btm-md white-trnsp-bg">Who we are</h1>
        <p className="mg-btm-md white-trnsp-bg">
          Ladies that UX is a global organization made up of individual city
          chapters. Read more about us at{" "}
          <a
            href="https://www.ladiesthatux.com/"
            alt="Ladies that UX Global"
            target="_blank"
            rel="noopener norefferer"
          >
            ladiesthatux.com
          </a>
        </p>
      </div>
    </section>
    <section className={styles.bioWrap}>
      <h3>Boston Organizers</h3>
      <div>
        <img src={"/katie-langerman.jpg"} alt="Katie Langerman" />
        <p>Katie Langerman</p>
        <span className={styles.socialWrap}>
          <a
            href="https://www.linkedin.com/in/langermank/"
            target="_blank"
            rel="noopener norefferer"
          >
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
            <span className="visually-hidden">LinkedIn</span>
          </a>
          <a
            href="https://twitter.com/KatieLangerman"
            target="_blank"
            rel="noopener norefferer"
          >
            <FontAwesomeIcon icon={faTwitter} size="lg" />
            <span className="visually-hidden">Twitter</span>
          </a>
        </span>
      </div>
      <div>
        <img src={"/lara-cavezza.jpg"} alt="Lara Greenberg Cavezza" />
        <p>Lara Greenberg Cavezza</p>
        <span className={styles.socialWrap}>
          <a
            href="https://www.linkedin.com/in/lara-g-7b65ba91/"
            target="_blank"
            rel="noopener norefferer"
          >
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
            <span className="visually-hidden">LinkedIn</span>
          </a>
          <a
            href="https://twitter.com/lar_greenberg"
            target="_blank"
            rel="noopener norefferer"
          >
            <FontAwesomeIcon icon={faTwitter} size="lg" />
            <span className="visually-hidden">Twitter</span>
          </a>
        </span>
      </div>
      <div>
        <img src={"/olga-perfilieva.jpg"} alt="Olga Perfilieva" />
        <p>Olga Perfilieva</p>
        <span className={styles.socialWrap}>
          <a
            href="https://www.linkedin.com/in/olgavperfilieva/"
            target="_blank"
            rel="noopener norefferer"
          >
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
            <span className="visually-hidden">LinkedIn</span>
          </a>
          <a
            href="https://twitter.com/olgavperfilieva"
            target="_blank"
            rel="noopener norefferer"
          >
            <FontAwesomeIcon icon={faTwitter} size="lg" />
            <span className="visually-hidden">Twitter</span>
          </a>
        </span>
      </div>
    </section>
    <section className={classnames(styles.heroWrap, styles.break)}>
      <div className={styles.headline}>
        <h2 className="mg-btm-md">Partner with us</h2>
        <p className="mg-btm-md">
          Is your company interested in hosting or sponsoring a Ladies that UX
          Boston event? Shoot an email to{" "}
          <a href="mailto:boston@ladiesthatux.com">boston@ladiesthatux.com</a>{" "}
          to discuss!
        </p>
        <h4 className="mg-btm-sm">Some things we look for in partnerships:</h4>
        <ul>
          <li>Space and seating for 50 to 100 people</li>
          <li>Screens or a projector for presentations</li>
          <li>Microphones for speakers</li>
          <li>Light food and beverages</li>
          <li>Accessible by public transit</li>
        </ul>
      </div>
    </section>
  </Layout>
);

export default AboutPage;
