import PropTypes from "prop-types";
import React from "react";
import styles from "../styles/footer.module.less";
import Logo from "./logo";

const Footer = () => (
  <footer>
    <Logo />
    <div className={styles.footerFlex}>
      <p>Ladies that UX Boston</p>
      <a
        href="https://docs.google.com/document/d/1w05mQwGxsBzrg1zGs_iV8oy_B5o15efXsaAOtVgngWg/edit?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        alt="code of conduct"
      >
        code of conduct
      </a>
    </div>
  </footer>
);

Footer.propTypes = {
  siteTitle: PropTypes.string
};

Footer.defaultProps = {
  siteTitle: ""
};

export default Footer;
