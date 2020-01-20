import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import styles from '../styles/base.less';

const Success = () => (
  <Layout>
    <Helmet>
      <title>Success Page</title>
      <meta name="description" content="Success Page" />
    </Helmet>
    <span className={styles.textCenter}>
      <p>Thank you for contacting us!</p>
      <p><Link to="/">Go back</Link></p>
    </span>
  </Layout>
);

export default Success;
