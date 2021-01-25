import React from 'react';

export default function Layout({ mt, children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <div
        className={`container ${
          mt ?? 'mt-12'
        } mb-12 px-6 max-w-5xl sm:mx-auto font-body box-border`}
      >
        {children}
      </div>
      <footer className="flex w-full h-16 items-center justify-center px-6 border-t mt-auto">
        <p>
          Made with <span className="text-red-500">♥</span> and{' '}
          <span>Gatsby</span>
        </p>
      </footer>
    </div>
  );
}
