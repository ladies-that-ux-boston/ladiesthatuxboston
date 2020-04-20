/* eslint-disable react/prop-types */
import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import styles from "../styles/mediumposts.module.less";

const mediumCDNUrl = `https://cdn-images-1.medium.com/max/600/`;

export default function MediumFeed({ data }) {
  const posts = data.allMediumPost.edges;

  return (
    <section className={styles.fullWidth}>
      <div className={styles.postsWrap}>
        {posts.map(post => (
          <article key={post.node.id}>
            {/* <h3>by {post.node.author.name}</h3> */}
            {/* <div className={styles.postImgWrap}> */}
            <img
              src={`${mediumCDNUrl}/${post.node.virtuals.previewImage.imageId}`}
              alt={post.node.title}
              className={styles.postImg}
            />
            <p>{post.node.title}</p>
            {/* </div> */}
          </article>
        ))}
      </div>
    </section>
  );
}

MediumFeed.propTypes = {
  data: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool,
    PropTypes.object,
    PropTypes.string,
    PropTypes.node
  ])
};

MediumFeed.defaultProps = {
  data: null
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
        }
      }
    }
  }
`;
