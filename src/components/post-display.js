import { Link } from 'gatsby';
import Image from 'gatsby-image';
import React from 'react';

export default function PostDisplay({ post }) {
  return (
    <div className="flex relative font-body">
      <Link to={post.slug}>
        <Image className="rounded-2xl w-44 h-48 z-10" fluid={post.image} />
      </Link>
      <div className="rounded-2xl bg-gray-800 w-44 h-48 absolute top-4 left-4"></div>
      <div className="ml-16 flex flex-col">
        <Link to={post.slug}>
          <h2 className="font-heading text-2xl">{post.title}</h2>
        </Link>
        <p className="text-gray-600">{post.author}</p>
        <p className="mt-4 text-lg">{post.excerpt}</p>
      </div>
    </div>
  );
}
