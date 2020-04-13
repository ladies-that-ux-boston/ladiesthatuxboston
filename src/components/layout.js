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
import { Breakpoint, BreakpointProvider } from "react-socks";
import Header from "./header";
import Footer from "./footer";
import styles from "../styles/layout.module.less";
import Sidebar from "./sidebar";

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
          <Breakpoint small down>
            <div
              style={{
                position: "fixed",
                width: "50px",
                height: "45px",
                right: "13px",
                top: "13px",
                background: "white",
                zIndex: "999"
              }}
            >
              <div
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  left: "0",
                  top: "0"
                }}
              ></div>
            </div>
            <Sidebar pageWrapId={"page-wrap"} />
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
