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

const Layout = ({ children }) => (
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
          <Breakpoint small down>
            <Sidebar pageWrapId={"page-wrap"} />
          </Breakpoint>
          <div className={styles.pageWrap} id="page-wrap">
            <Breakpoint medium up style={{ gridArea: "header" }}>
              <Header siteTitle={data.site.siteMetadata.title} />
            </Breakpoint>
            <Breakpoint
              small
              down
              style={{ gridArea: "header", position: "sticky", top: "0" }}
            >
              <header className={styles.header}>
                <Link to="/">
                  <LogoHorizontal />
                </Link>
              </header>
            </Breakpoint>

            <main id="main-wrap">{children}</main>
            <Footer />
          </div>
        </BreakpointProvider>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
