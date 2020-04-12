/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faLinkedin,
  faMeetup
} from "@fortawesome/free-brands-svg-icons";

export default function SocialLinks({ className }) {
  return (
    <ul className={className}>
      <li>
        <a
          href="https://www.meetup.com/Ladies-That-UX-Boston/"
          target="_blank"
          rel="noopener norefferer"
        >
          <FontAwesomeIcon icon={faMeetup} size="2x" />
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/LadiesThatUXBOS"
          target="_blank"
          rel="noopener norefferer"
        >
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/ladiesthatuxbos/"
          target="_blank"
          rel="noopener norefferer"
        >
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/company/ladies-that-ux-boston"
          target="_blank"
          rel="noopener norefferer"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
      </li>
    </ul>
  );
}

SocialLinks.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool,
    PropTypes.object,
    PropTypes.string,
    PropTypes.node
  ])
};

SocialLinks.defaultProps = {
  className: null
};
