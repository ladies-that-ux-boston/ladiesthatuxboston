/* eslint-disable react/prop-types */
import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

const mediumCDNUrl = `https://cdn-images-1.medium.com/max/150/`;

export default function MediumFeed({ data }) {
  const posts = data.allMediumPost.edges;

  return (
    <section>
      {posts.map(post => (
        <article key={post.node.id}>
          <h2>{post.node.title}</h2>
          <h3>by {post.node.author.name}</h3>
          <img
            src={`${mediumCDNUrl}/${post.node.virtuals.previewImage.imageId}`}
            alt={post.node.title}
            width="150"
          />
        </article>
      ))}
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
