/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import classnames from "clsx";
import styles from "../styles/mediumposts.module.less";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkSquareAlt } from "@fortawesome/free-solid-svg-icons";

const mediumCDNUrl = `https://cdn-images-1.medium.com/max/600/`;
const mediumUrl = `https://medium.com/ltuxbos`;

export default function MediumFeed({ data }) {
  const posts = data.allMediumPost.edges;

  return (
    <section className={classnames(styles.fullWidth, styles.mediumFeed)}>
      <div className={styles.heading}>
        <h2 className="mg-btm-md">Women Crush Wednesday #WCW</h2>
        <p className="mg-btm-md">
          Each month we feature one of our members in a post to learn more about
          their career journeys.{" "}
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScx5mWwnqhqWYmLmndgUKzoXLHHqm9yR1RlfPt7zykMi8vnbA/viewform"
            alt="Nominate our next feature"
            target="_blank"
            rel="noopener noreferrer"
          >
            Nominate our next feature{" "}
            <FontAwesomeIcon icon={faExternalLinkSquareAlt} />
          </a>
        </p>
      </div>
      <div className={styles.postsWrap}>
        <ul className={styles.itemList}>
          {posts.map((post) => (
            <li key={post.node.uniqueSlug} className={styles.item}>
              <a
                href={`${mediumUrl}/${post.node.uniqueSlug}`}
                key={post.node.id}
                alt={post.node.title}
                target="_blank"
                rel="noopener noreferrer"
              >
                <figure className={styles.postImgWrap}>
                  <img
                    src={`${mediumCDNUrl}/${post.node.virtuals.previewImage.imageId}`}
                    alt={post.node.title}
                    className={styles.postImg}
                  />
                </figure>
                <p>{post.node.title}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <a
        href="https://medium.com/ltuxbos"
        alt="All posts on Medium"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.allPosts}
      >
        Sell all
      </a>
    </section>
  );
}

MediumFeed.propTypes = {
  data: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool,
    PropTypes.object,
    PropTypes.string,
    PropTypes.node,
  ]),
};

MediumFeed.defaultProps = {
  data: null,
};

// Increase the `limit` parameter to get more posts
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
