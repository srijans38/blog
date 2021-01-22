import { graphql, Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import Layout from './layout';
import '../styles/blogmdx.css';

export default function BlogTemplate({ data: { mdx: post } }) {
  return (
    <>
      <div className="fixed mt-0 bg-transparent blur-filter w-screen h-16 top-0 z-10">
        <div className="px-6 max-w-5xl sm:mx-auto lg:px-4 flex items-center h-full font-heading text-3xl font-bold">
          <Link to="/">
            <p>Srijan's Blog</p>
          </Link>
        </div>
      </div>
      <Layout mt="mt-28">
        <h1>{post.frontmatter.title}</h1>
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
        date
      }
      body
      timeToRead
    }
  }
`;
