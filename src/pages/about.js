import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

export default({ data }) => (
    <Layout>
        <h1>{ data.site.siteMetadata.title }</h1>
        <p>Lorem ipusm sit et dolor</p>
    </Layout>
)

export const query = graphql`
query {
    site {
        siteMetadata {
            title
        }
    }
}
`