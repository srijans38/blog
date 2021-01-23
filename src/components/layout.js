import React from 'react';

export default function Layout({ mt, children }) {
  return (
    <>
      <div
        className={`container ${
          mt ?? 'mt-12'
        } mb-24 px-6 max-w-5xl sm:mx-auto font-body box-border`}
      >
        {children}
      </div>
      <footer className="flex w-full h-16 items-center justify-center px-6 border-t">
        <p>
          Made with <span className="text-red-500">♥</span> and{' '}
          <span>Gatsby</span>
        </p>
      </footer>
    </>
  );
}
