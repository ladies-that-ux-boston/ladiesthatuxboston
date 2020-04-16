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

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { addClass: false };
  }
  toggle() {
    this.setState({ addClass: !this.state.addClass });
  }

  render() {
    let navClass = ["responsiveNav"];
    if (this.state.addClass) {
      navClass.push("open");
    }

    return (
      <header className={styles.header} style={{ gridArea: "header" }}>
        <Link to="/">
          <LogoHorizontal />
        </Link>
        <button onClick={this.toggle.bind(this)}>
          {/* {this.state.isToggleOn ? "ON" : "OFF"} */}
          yo
        </button>
        <div id="js-menu" className={navClass.join(" ")}>
          <span className={styles.navLinks}>
            <NavLinks />
          </span>
          <SocialLinks className={styles.socialLinks} />
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ""
};
