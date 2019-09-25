import React from "react";
import { graphql } from 'gatsby';
// import { css } from '@emotion/core';
// import { rhythm } from '../utils/typography';
import Layout from "../components/layout";


export default ({ data }) => {
    console.log(data);
    return (
    <Layout>
        <div>
            <h4>{ data.allMarkdownRemark.totalCount } Posts</h4>
            { data.allMarkdownRemark.edges.map(({ node }) => {
                console.log(node);
                return (
                  <div key={node.id}>
                    <h1>{ node.frontmatter.title }</h1>
                    <h5>{ node.frontmatter.date }</h5>
                    <p>{ node.excerpt }</p>
                  </div>
                )
            })}
        </div>
    </Layout>
)
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
        }
      }
    }
  }
`;
