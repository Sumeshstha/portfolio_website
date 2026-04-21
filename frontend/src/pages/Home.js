import React from 'react';
import { Hero, About, Skills, Projects } from '../components';

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />

      {/* TEMP UNDER-CONSTRUCTION CONTACT SECTION (Apr 2026)
          To undo: remove this section and restore <Contact /> below. */}
      <section id="contact" className="py-16 sm:py-20 bg-light-bg dark:bg-dark-bg">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-light-text dark:text-dark-text mb-4">
            Contact - Under Construction
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300">
            This section is currently being updated. Please check back soon.
          </p>
        </div>
      </section>

      {/* <Contact /> */}
    </>
  );
};

export default Home;