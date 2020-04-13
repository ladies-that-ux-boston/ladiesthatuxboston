/* eslint-disable react/jsx-one-expression-per-line */
/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import { Link } from "gatsby";
import { Breakpoint, BreakpointProvider } from "react-socks";
import Header from "./header";
import Footer from "./footer";
import styles from "../styles/layout.module.less";
import Sidebar from "./sidebar";
import LogoHorizontal from "./logo-horizontal";

const Layout = ({ children, className }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <BreakpointProvider>
          <Breakpoint
            small
            down
            style={{
              display: "flex",
              alignItems: "center",
              position: "sticky",
              top: "20",
              zIndex: "999",
              background: "white",
              height: "70px",
              borderBottom: "solid 1px black"
            }}
          >
            <Sidebar pageWrapId={"page-wrap"} />
            <Link to="/" className={styles.logo}>
              <LogoHorizontal />
            </Link>
          </Breakpoint>
          <div className={styles.pageWrap} id="page-wrap">
            <Breakpoint medium up style={{ gridArea: "header" }}>
              <Header siteTitle={data.site.siteMetadata.title} />
            </Breakpoint>
            <main id="main-wrap" className={className}>
              {children}
            </main>
            <Footer />
          </div>
        </BreakpointProvider>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool,
    PropTypes.object,
    PropTypes.string,
    PropTypes.node
  ])
};

Layout.defaultProps = {
  className: null
};

export default Layout;
