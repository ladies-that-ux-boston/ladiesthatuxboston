/* eslint-disable max-len */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
// import { Link } from "gatsby";
// import { Breakpoint, BreakpointProvider } from "react-socks";
// import LogoHorizontal from "../components/logo-horizontal";
import SEO from "../components/seo";
import classnames from "clsx";
import styles from "../styles/home.module.less";
import buttonStyles from "../styles/button.module.less";
import EmailSignup from "../components/emailsignup";
import MediumFeed from "../components/mediumfeed";
// import ScrollingBox from "../components/ScrollingBox";

// const mediumCDNUrl = `https://cdn-images-1.medium.com/max/600/`;
// const mediumUrl = `https://medium.com/ltuxbos`;

// export function MediumFeed({ data }) {
//   <div className={styles.postsWrap}>
//     {posts.map((post) => (
//       <a
//         href={`${mediumUrl}/${post.node.uniqueSlug}`}
//         key={post.node.uniqueSlug}
//       >
//         <article key={post.node.id}>
//           {/* <h3>by {post.node.author.name}</h3> */}
//           {/* <div className={styles.postImgWrap}> */}
//           <img
//             src={`${mediumCDNUrl}/${post.node.virtuals.previewImage.imageId}`}
//             alt={post.node.title}
//             className={styles.postImg}
//           />
//           <p>{post.node.title}</p>
//           {/* </div> */}
//         </article>
//       </a>
//     ))}
//   </div>
// };

const IndexPage = ({ data }) => (
  <Layout className={styles.homeWrap}>
    <SEO title="Home" keywords={["gatsby", "application", "react"]} />

    <section className={styles.heroWrap}>
      <div className={styles.headline}>
        <h1 className="mg-btm-md white-trnsp-bg">
          Monthly UX meetup featuring female and non-binary speakers
        </h1>
        <p className="mg-btm-md white-trnsp-bg">
          Open to all genders and experience levels, we cover topics like
          design, research and career development
        </p>
        <a
          href="https://www.meetup.com/Ladies-That-UX-Boston/"
          alt="meetup"
          target="_blank"
          rel="noopener noreferrer"
          className={classnames(
            buttonStyles.button,
            buttonStyles.link,
            buttonStyles.primary
          )}
        >
          Events
        </a>
      </div>
      <div className={styles.heroImage}>
        <img src={"/bostoncityvector.svg"} />
      </div>
    </section>
    <section className={styles.emailSignupWrap}>
      <h2 className="mg-btm-md">Join our monthly newsletter</h2>
      <p className="mg-btm-md">
        We’ll send you job listings, news about upcoming events and our #WCW
      </p>
      <EmailSignup />
    </section>
    {/* <ScrollingBox items={MediumFeed} data={data} /> */}
    <MediumFeed data={data} />
  </Layout>
);

export default IndexPage;

export const pageQuery = graphql`
  query {
    allMediumPost(limit: 3, sort: { fields: [createdAt], order: DESC }) {
      edges {
        node {
          id
          title
          author {
            name
          }
          virtuals {
            previewImage {
              imageId
            }
          }
          uniqueSlug
        }
      }
    }
  }
`;
