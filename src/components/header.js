import { Link } from 'gatsby';
import React from 'react';

export default function Header() {
  return (
    <div className="fixed mt-0 bg-header blur-filter w-screen h-16 top-0 z-20">
      <div className="px-6 max-w-5xl sm:mx-auto lg:px-4 flex items-center h-full font-heading text-3xl font-bold">
        <Link to="/">
          <p>Srijan's Blog</p>
        </Link>
      </div>
    </div>
  );
}
