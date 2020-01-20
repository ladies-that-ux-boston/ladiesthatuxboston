/* eslint-disable react/jsx-filename-extension */
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faLinkedin,
  faMeetup
} from '@fortawesome/free-brands-svg-icons';
import Logo from './logo';
import styles from '../styles/header.module.less';

const Header = () => (
  <header className={styles.header}>
    <Logo />
    <span className={styles.navLinks}>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/langermank/"
            alt="linkedin"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/KatieLangerman"
            alt="twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            twitter
          </a>
        </li>
        <li>
          <a
            href="https://github.com/langermank"
            alt="github"
            target="_blank"
            rel="noopener noreferrer"
          >
            github
          </a>
        </li>
        <li>
          <a
            href="https://dribbble.com/katielangerman"
            target="_blank"
            rel="noopener noreferrer"
            alt="dribbble"
          >
            dribbble
          </a>
        </li>
      </ul>
    </span>
    <ul className={styles.socialLinks}>
      <li>
        <a
          href="https://www.meetup.com/Ladies-That-UX-Boston/"
          rel="noopener norefferer"
          target="_blank"
        >
          <FontAwesomeIcon icon={faMeetup} size="3x" />
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/LadiesThatUXBOS"
          target="_blank"
          rel="noopener norefferer"
        >
          <FontAwesomeIcon icon={faTwitter} size="3x" />
        </a>
      </li>
      <li>
        <a
          href="https://www.facebook.com/LTUXBOS/"
          target="_blank"
          rel="noopener norefferer"
        >
          <FontAwesomeIcon icon={faFacebook} size="3x" />
        </a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/ladiesthatuxbos/"
          target="_blank"
          rel="noopener norefferer"
        >
          <FontAwesomeIcon icon={faInstagram} size="3x" />
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/company/ladies-that-ux-boston"
          target="_blank"
          rel="noopener norefferer"
        >
          <FontAwesomeIcon icon={faLinkedin} size="3x" />
        </a>
      </li>
    </ul>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ''
};

export default Header;
