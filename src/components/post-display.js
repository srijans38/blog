import { Link } from 'gatsby';
import Image from 'gatsby-image';
import React from 'react';

export default function PostDisplay({ post }) {
  return (
    <div className="flex relative font-body">
      <Link to={post.slug}>
        <Image
          className="hidden md:block rounded-2xl w-44 h-48 z-10 shadow-2xl"
          fluid={post.image}
        />
      </Link>
      <div className="hidden md:block rounded-2xl bg-gray-800 w-44 h-48 absolute top-4 left-4"></div>
      <div className="ml-0 md:ml-16 flex flex-col">
        <Link to={post.slug}>
          <h2 className="font-heading text-2xl">{post.title}</h2>
        </Link>
        <p className="my-4 md:my-auto text-sm md:text-lg break-all">
          {post.excerpt}
        </p>
        <div className="flex mt-auto space-x-3 text-gray-600 text-sm">
          <p>{post.date}</p>
          <p>|</p>
          <p>{post.timeToRead} minute read</p>
        </div>
      </div>
    </div>
  );
}
