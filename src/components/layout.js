import React from 'react';

export default function Layout({ mt, children }) {
  return (
    <div
      className={`container ${
        mt ?? 'mt-12'
      } px-6 max-w-5xl sm:mx-auto font-body box-border`}
    >
      {children}
    </div>
  );
}
