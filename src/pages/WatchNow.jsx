import React from "react";

const WatchNow = () => {
  return (
    <div className="bg-gradient-to-b from-black via-purple-900 to-black min-h-screen text-white">
      <section className="relative bg-cover bg-center h-screen flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-5xl font-bold mb-4">Watch Squid Game Now</h1>
        <p className="text-lg max-w-xl mb-8">
          Start watching the global phenomenon that has everyone talking.
          Thrilling games, intense drama, and unforgettable characters await.
        </p>
        <a
          href="https://www.netflix.com/title/81040344"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-full transition inline-block"
        >
          Start Watching on Netflix
        </a>
      </section>

      {/* Ecommerce Product */}
      <section className="py-20 px-8  text-center">
        <h2 className="text-3xl font-bold mb-6">Stream Instantly</h2>
        <p className="max-w-2xl mx-auto text-lg mb-8">
          Enjoy Squid Game right now on your favorite streaming service. Click
          below to start watching or explore episodes.
        </p>
        <div className="flex justify-center">
          <iframe
            className="w-full max-w-3xl aspect-video rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/zgGTVaG2UiQ?si=dHed5DgyJoDIUyKP" 
            title="Squid Game Trailer"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 px-8  text-center">
        <h2 className="text-3xl font-bold mb-6">What Viewers Are Saying</h2>
        <p className="max-w-2xl mx-auto text-lg italic mb-4">
          "Squid Game is the most intense and addictive show I've seen in years.
          Couldn’t stop watching!"
        </p>
        <p className="max-w-2xl mx-auto text-lg italic mb-4">
          "A dark, emotional masterpiece that keeps you questioning humanity at
          every turn."
        </p>
        <p className="max-w-2xl mx-auto text-lg italic">
          "The best series of the decade. A must-watch for everyone who loves
          thrillers and deep stories."
        </p>
      </section>

      {/* CTA */}
      <section className="py-20 px-8  text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Join the Game?</h2>
        <p className="max-w-2xl mx-auto text-lg mb-8">
          Don’t wait — start watching now and experience the most talked-about
          series on the planet. Join the hype!
        </p>
        <button className="bg-red-600 hover:bg-red-700 text-white py-3 px-8 rounded-full transition">
          Watch Now
        </button>
      </section>

      <h2 className="text-3xl font-bold mb-5 text-center pt-20 ">
        Seasons & Episodes
      </h2>
      {/* Seasons & Episodes */}
      <section className="py-20 px-8 text-center flex">
        {/* Season 1 */}
        <div className="max-w-2xl mx-auto text-left mb-12">
          <h3 className="text-2xl font-semibold mb-4">
            Season 1 (2021) – 9 episodes
          </h3>
          <ul className="list-decimal list-inside space-y-2">
            <li>Red Light, Green Light</li>
            <li>Hell</li>
            <li>The Man with the Umbrella</li>
            <li>Stick to the Team</li>
            <li>A Fair World</li>
            <li>Gganbu</li>
            <li>VIPs</li>
            <li>Front Man</li>
            <li>One Lucky Day</li>
          </ul>
        </div>

        {/* Season 2 */}
        <div className="max-w-2xl mx-auto text-left mb-12">
          <h3 className="text-2xl font-semibold mb-4">
            Season 2 (2024) – 7 episodes
          </h3>
          <ul className="list-decimal list-inside space-y-2">
            <li>Bread and Lottery</li>
            <li>Halloween Party</li>
            <li>001</li>
            <li>Six Legs</li>
            <li>One More Game</li>
            <li>O X</li>
            <li>Friend or Foe</li>
          </ul>
          
        </div>

        {/* Season 3 */}
        <div className="max-w-2xl mx-auto text-left">
          <h3 className="text-2xl font-semibold mb-4">
            Season 3 (2025) – 6 episodes
          </h3>
          <ul className="list-decimal list-inside space-y-2">
            <li>Keys and Knives</li>
            <li>The Starry Night</li>
            <li>It's Not Your Fault</li>
            <li>222</li>
            <li>444</li>
            <li>Humans Are...</li>
          </ul>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-8  text-center text-gray-500">
        &copy; {new Date().getFullYear()} Squid Game. All rights reserved.
      </footer>
    </div>
  );
};

export default WatchNow;
