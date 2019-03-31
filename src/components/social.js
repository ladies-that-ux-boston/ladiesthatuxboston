/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faLinkedin,
  faMeetup,
} from '@fortawesome/free-brands-svg-icons';
import styles from '../styles/base.module.less';

const Social = () => (
  <section className={styles.social}>
    <h2 className={styles.textCenter}>Join the conversation</h2>
    <p className={styles.textCenter}>
      Signup for our
      <a
        href="https://us12.list-manage.com/subscribe?u=b96f7627f43794d6c133035bd&id=8c099cce18"
        target="_blank"
        rel="noopener norefferer"
      >
        mailing list
      </a>
    </p>
    <ul className={styles.iconWrap}>
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
  </section>
);

export default Social;
