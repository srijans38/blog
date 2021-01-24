import React from 'react';
import Layout from '../components/layout';
import Header from '../components/header';
import { useStaticQuery, graphql } from 'gatsby';

export default function Posts() {
  const data = useStaticQuery(graphql`
    query {
      allMdx(sort: { fields: frontmatter___date, order: DESC }, limit: 4) {
        nodes {
          excerpt(pruneLength: 200)
          timeToRead
          frontmatter {
            author
            slug
            title
            date(formatString: "Do [of] MMMM, YYYY")
            image {
              childImageSharp {
                fluid(maxHeight: 200, maxWidth: 180) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  `);

  return (
    <>
      <Header />
      <Layout mt="mt-28">
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </Layout>
    </>
  );
}
