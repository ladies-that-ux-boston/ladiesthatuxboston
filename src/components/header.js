/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/jsx-filename-extension */
// import { Link } from 'gatsby';
import PropTypes from "prop-types";
import { Link } from "gatsby";
import React from "react";
import styles from "../styles/header.module.less";
import NavLinks from "./navlinks";
import SocialLinks from "./sociallinks";
import LogoHorizontal from "./logo-horizontal";

const Header = () => (
  <header className={styles.header}>
    <Link to="/">
      <LogoHorizontal />
    </Link>
    <span className={styles.navLinks}>
      <NavLinks />
    </span>
    <SocialLinks className={styles.socialLinks} />
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ""
};

export default Header;
