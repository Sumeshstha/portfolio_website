import React from 'react';

const UnderConstruction = () => {
  return (
    <section className="min-h-[70vh] flex items-center justify-center px-6 py-24 bg-light-bg dark:bg-dark-bg">
      <div className="max-w-2xl text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-light-text dark:text-dark-text mb-4">
          Under Construction
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300">
          This page is currently being built. Please check back soon.
        </p>
      </div>
    </section>
  );
};

export default UnderConstruction;
