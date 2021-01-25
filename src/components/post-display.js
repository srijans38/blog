import { Link } from 'gatsby';
import Image from 'gatsby-image';
import React from 'react';

export default function PostDisplay({ post }) {
  return (
    <div className="flex relative font-body">
      <div className="group">
        <Link to={`/${post.slug}`} aria-label={post.title}>
          <Image
            className="hidden md:block rounded-2xl w-44 h-48 z-10 shadow-2xl transform transition group-hover:-translate-x-1 group-hover:-translate-y-1"
            alt={post.title}
            fluid={post.image}
          />
        </Link>
        <div className="hidden md:block rounded-2xl bg-gray-800 w-44 h-48 absolute top-4 left-4 transform transition group-hover:translate-x-1 group-hover:translate-y-1"></div>
      </div>
      <div className="ml-0 md:ml-16 flex flex-col">
        <Link to={`/${post.slug}`}>
          <h2 className="break-all md:break-normal font-heading text-2xl transition-colors hover:text-gray-600 ">
            {post.title}
          </h2>
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
