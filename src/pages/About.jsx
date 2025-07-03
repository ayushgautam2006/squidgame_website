import React from "react";

const About = () => {
  return (
    <div className="bg-gradient-to-b from-black via-purple-900 to-black min-h-screen text-white">
      <section className="pt-40 pb-20  text-center">
        <h2 className="text-3xl font-bold mb-6">Discover the Squid Game Universe</h2>
        <p className="max-w-2xl mx-auto text-lg">
          Explore the brutal yet captivating premise of Squid Game — a high-stakes survival game that serves as a sharp commentary on society, debt, and human nature.
        </p>
      </section>

      {/* Features List*/}
      <section className="py-20 px-8 text-center">
        <h2 className="text-3xl font-bold mb-10">What Sets It Apart</h2>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          <div className="bg-gray-900 p-6 rounded shadow-lg flex-1">
            <h3 className="text-xl font-bold mb-2">Global Popularity</h3>
            <p>From Korea to the world — a phenomenon that broke records and captured global audiences everywhere.</p>
          </div>
          <div className="bg-gray-900 p-6 rounded shadow-lg flex-1">
            <h3 className="text-xl font-bold mb-2">Awards & Recognition</h3>
            <p>Winner of multiple prestigious awards for acting, storytelling, and production design.</p>
          </div>
          <div className="bg-gray-900 p-6 rounded shadow-lg flex-1">
            <h3 className="text-xl font-bold mb-2">Critical Acclaim</h3>
            <p>Praised by critics for its originality, performances, and social commentary.</p>
          </div>
        </div>
      </section>

      {/* Benefits*/}
      <section className="py-20 px-8  to-black text-center">
        <h2 className="text-3xl font-bold mb-6">Why Watch Squid Game?</h2>
        <p className="max-w-2xl mx-auto text-lg mb-4">
          Dive into a gripping storyline filled with unexpected twists and deeply human moments that keep you hooked from start to finish.
        </p>
        <p className="max-w-2xl mx-auto text-lg mb-4">
          Meet complex, relatable characters who force you to question morality, loyalty, and survival instincts.
        </p>
        <p className="max-w-2xl mx-auto text-lg">
          Appreciate top-tier production value and stunning visual storytelling that makes every scene unforgettable.
        </p>
      </section>

      {/* Timeline */}
      <section className="py-20 px-8 text-center">
        <h2 className="text-3xl font-bold mb-10">Timeline of Squid Game</h2>
        <div className="flex flex-col gap-6 max-w-3xl mx-auto text-left">
          <div className="bg-gray-900 p-4 rounded">
            <h3 className="font-bold">2010: Conceptualization</h3>
            <p>The idea for Squid Game was first conceived, tackling themes of economic disparity and desperation.</p>
          </div>
          <div className="bg-gray-900 p-4 rounded">
            <h3 className="font-bold">2019: Production Begins</h3>
            <p>After nearly a decade, the project moved forward and entered full-scale production.</p>
          </div>
          <div className="bg-gray-900 p-4 rounded">
            <h3 className="font-bold">2021: Global Release</h3>
            <p>Squid Game premiered on Netflix, instantly becoming a worldwide sensation and cultural phenomenon.</p>
          </div>
          <div className="bg-gray-900 p-4 rounded">
            <h3 className="font-bold">2022-Present: Awards & Impact</h3>
            <p>Continued to receive awards and inspire discussions about society, economics, and entertainment worldwide.</p>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 px-8  to-black text-center">
        <h2 className="text-3xl font-bold mb-6">What People Are Saying</h2>
        <p className="max-w-2xl mx-auto text-lg italic mb-4">
          "A groundbreaking series that redefines the survival game genre — intense, emotional, and unforgettable."
        </p>
        <p className="max-w-2xl mx-auto text-lg italic">
          "Squid Game is more than entertainment; it's a bold social critique wrapped in a masterful thriller."
        </p>
      </section>

      {/* About */}
      <section className="py-20 px-8  text-center">
        <h2 className="text-3xl font-bold mb-6">About the Creators</h2>
        <p className="max-w-2xl mx-auto text-lg mb-4">
          Created by visionary director Hwang Dong-hyuk, Squid Game is the result of years of passion and perseverance. The team includes talented writers, producers, and designers dedicated to bringing an unforgettable story to life.
        </p>
        <p className="max-w-2xl mx-auto text-lg">
          With a talented cast led by Lee Jung-jae, Park Hae-soo, and Jung Ho-yeon, each character delivers depth and raw emotion that resonate worldwide.
        </p>
      </section>

      {/* Footer */}
      <footer className="py-8 px-8  text-center text-gray-500">
        &copy; {new Date().getFullYear()} Squid Game. All rights reserved.
      </footer>
    </div>
  );
};

export default About;