import { graphql, Link } from 'gatsby';
import React from 'react';

export default function Page404({
  data: {
    file: { publicURL },
  },
}) {
  return (
    <div className="flex flex-col mx-6 text-center h-screen items-center justify-center font-body font-bold space-y-4">
      <h1 className="mb-12">404 Not Found</h1>
      <p>The Page you are looking for cannot be found</p>
      <Link
        className="w-max mx-2 px-2 py-2 self-center rounded cursor-pointer ring-2 ring-gray-400 text-gray-500  hover:text-gray-800 focus:ring-gray-700"
        to="/"
      >
        <p>Go to Home</p>
      </Link>
      <img src={publicURL} alt="Can't find page" />
      <p>Look, we tried.</p>
    </div>
  );
}

export const query = graphql`
  {
    file(name: { eq: "lost" }) {
      publicURL
    }
  }
`;
