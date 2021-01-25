import React from 'react';
import Img from 'gatsby-image';
import { Helmet } from 'react-helmet';
import { graphql, Link, useStaticQuery } from 'gatsby';
import usePostList from '../hooks/use-post-list';
import PostDisplay from '../components/post-display';
import Layout from '../components/layout';
import GitHubIcon from '../components/icons/github';
import InstagramIcon from '../components/icons/instagram';
import TwitterIcon from '../components/icons/twitter';
import LinkedInIcon from '../components/icons/linkedin';

function Index({ data }) {
  const me = useStaticQuery(graphql`
    query {
      file(name: { eq: "me" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  const posts = usePostList();

  return (
    <Layout>
      <Helmet>
        <title>Srijan's Blog</title>
        <meta name="description" content="This is Srijan's Blog" />
        <html lang="en" />
      </Helmet>
      <header className="relative">
        <Img
          className="rounded-full w-28 h-28 lg:w-44 lg:h-44 z-10 shadow-img pointer-events-none"
          fluid={me.file.childImageSharp.fluid}
        />
        <div className="bg-gray-800 w-28 h-28 lg:w-44 lg:h-44 rounded-full absolute top-0 left-12" />
        <h1 className="font-heading text-4xl lg:text-5xl font-black mt-10">
          Srijan's Blog
        </h1>
        <div className="flex flex-col justify-between h-full absolute right-0 top-0">
          <GitHubIcon />
          <InstagramIcon />
          <TwitterIcon />
          <LinkedInIcon />
        </div>
      </header>
      <div className="mt-12 h-px w-full bg-gradient-to-r from-white via-black to-white"></div>
      <div className="mt-8 md:mt-12 space-y-8 md:space-y-16 flex flex-col">
        {posts.map((post) => (
          <PostDisplay key={post.slug} post={post} />
        ))}
        <Link
          className="w-max mx-2 px-2 py-2 self-center rounded cursor-pointer ring-2 ring-gray-400 text-gray-500  hover:text-gray-800 focus:ring-gray-700"
          to="/posts"
        >
          <p>View all Posts</p>
        </Link>
      </div>
    </Layout>
  );
}

export default Index;
