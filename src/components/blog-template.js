import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import Layout from './layout';
import Header from './header';
import Img from 'gatsby-image';
import '../styles/blogmdx.css';
import SEO from './seo';

export default function BlogTemplate({ data: { mdx: post } }) {
  return (
    <>
      <SEO
        title={post.frontmatter.title}
        image={post.frontmatter.image.childImageSharp.fixed.src}
        description={post.excerpt}
        article
      />
      <Header />
      <Layout mt="mt-28">
        <h1>{post.frontmatter.title}</h1>
        <Img
          fluid={post.frontmatter.image.childImageSharp.fluid}
          className="rounded md:rounded-lg max-h-80 my-8"
        />
        <div className="flex mt-4 mb-8 space-x-3 text-gray-600 text-sm">
          <p>{post.frontmatter.date}</p>
          <p>|</p>
          <p>{post.timeToRead} minute read</p>
        </div>
        <div className="content">
          <MDXRenderer>{post.body}</MDXRenderer>
        </div>
      </Layout>
    </>
  );
}

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        author
        title
        date(formatString: "Do [of] MMMM, YYYY")
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
            fixed(width: 1200, height: 630, fit: CONTAIN) {
              src
            }
          }
        }
      }
      excerpt
      body
      timeToRead
    }
  }
`;
