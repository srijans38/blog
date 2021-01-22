import { graphql, Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import Layout from './layout';

export default function BlogTemplate({ data: { mdx: post } }) {
  return (
    <>
      <div className="fixed mt-0 bg-transparent blur-filter w-screen h-16 top-0">
        <div className="px-6 max-w-5xl sm:mx-auto lg:px-4 flex items-center h-full font-heading text-3xl font-bold">
          <Link to="/">
            <p>Srijan's Blog</p>
          </Link>
        </div>
      </div>
      <Layout mt="mt-28">
        <h1 className="font-heading text-5xl">{post.frontmatter.title}</h1>
        <p>{post.frontmatter.author}</p>
        <MDXRenderer>{post.body}</MDXRenderer>
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
      }
      body
    }
  }
`;
