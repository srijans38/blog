import React from 'react';

export default function PostDisplay({ post }) {
  return (
    <div>
      <h3>{post.title}</h3>
      <p>{post.excerpt}</p>
    </div>
  );
}
