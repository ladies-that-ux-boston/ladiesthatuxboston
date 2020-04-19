/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/jsx-filename-extension */
// import { Link } from 'gatsby';
import PropTypes from "prop-types";
import { Link } from "gatsby";
import React from "react";
import classnames from "clsx";
import buttonStyles from "../styles/button.module.less";
import styles from "../styles/header.module.less";
import NavLinks from "./navlinks";
// import { Breakpoint, BreakpointProvider } from "react-socks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SocialLinks from "./sociallinks";
import LogoHorizontal from "./logo-horizontal";
import { faBars } from "@fortawesome/free-solid-svg-icons";

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
        <button
          className={classnames(
            buttonStyles.button,
            buttonStyles.iconOnly,
            styles.mobileMenuButton
          )}
          onClick={this.toggle.bind(this)}
        >
          <FontAwesomeIcon icon={faBars} size="2x" />
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
