import { graphql, Link } from 'gatsby';
import React from 'react';
import Header from './header';
import Layout from './layout';
import PostDisplay from './post-display';
import SEO from './seo';

export default function AllPosts({
  data: {
    allMdx: { nodes, pageInfo },
  },
}) {
  const posts = nodes.map((post) => ({
    title: post.frontmatter.title,
    slug: post.frontmatter.slug,
    author: post.frontmatter.author,
    excerpt: post.excerpt,
    image: post.frontmatter.image?.childImageSharp.fluid,
    date: post.frontmatter.date,
    timeToRead: post.timeToRead,
  }));

  const { currentPage, hasNextPage, hasPreviousPage, pageCount } = pageInfo;

  return (
    <>
      <SEO title={`All Posts | Page ${currentPage}`} />
      <Header />
      <Layout mt="mt-24">
        <div className="w-full h-8 text-xs md:text-base flex items-center">
          <Link
            className={`${
              !hasPreviousPage ? 'invisible' : ''
            } mx-2 px-2 py-2 rounded cursor-pointer ring-2 ring-gray-400 text-gray-500  hover:text-gray-800 focus:ring-gray-700`}
            to={`/posts/${currentPage === 2 ? '' : currentPage - 1}`}
          >
            <p>Previous Page</p>
          </Link>
          <p className="text-gray-500 whitespace-pre-line mx-auto">
            Page {currentPage}/{pageCount}
          </p>
          <Link
            className={`${
              !hasNextPage ? 'invisible' : ''
            } mx-2 px-2 py-2 rounded cursor-pointer ring-2 ring-gray-400 text-gray-500  hover:text-gray-800 focus:ring-gray-700`}
            to={`/posts/${currentPage + 1}`}
          >
            <p>Next Page</p>
          </Link>
        </div>
        <div className="mt-4 md:mt-12 space-y-8 md:space-y-16">
          {posts.map((post) => (
            <PostDisplay key={post.slug} post={post} />
          ))}
        </div>
      </Layout>
    </>
  );
}

export const query = graphql`
  query($skip: Int!) {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      limit: 5
      skip: $skip
    ) {
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
      pageInfo {
        currentPage
        hasNextPage
        hasPreviousPage
        pageCount
      }
    }
  }
`;
