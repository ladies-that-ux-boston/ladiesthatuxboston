import React from 'react';
import CityImage from './image';
import styles from '../styles/base.module.less';

const Header = () => (
  <header>
    <h1 className={styles.textCenter}>
      Ladies that UX Boston is a meetup group open to anyone interested in UX
    </h1>
    <CityImage />
  </header>
);

export default Header;
