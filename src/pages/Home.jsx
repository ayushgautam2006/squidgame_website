import React from "react";
import { Link } from "react-router-dom";
import Card from './Card'

const Home = () => {

  const teamData = [
  {
    "name": "Hwang Dong-hyuk",
    "role": "Creator & Director",
    "description": "The mastermind behind Squid Game, crafting its intense story and striking visuals.",
    "image": "",
    "linkedinUrl": "https://linkedin.com/in/hwang-dong-hyuk",
    "dribbbleUrl": "https://dribbble.com/hwang-dong-hyuk",
    "closeUrl": "https://example.com/close"
  },
  {
    "name": "Lee Jung-jae",
    "role": "Lead Actor (Seong Gi-hun)",
    "description": "Award-winning actor delivering a powerful and vulnerable performance as Player 456.",
    "image": "",
    "linkedinUrl": "https://linkedin.com/in/lee-jung-jae",
    "dribbbleUrl": "https://dribbble.com/lee-jung-jae",
    "closeUrl": "https://example.com/close"
  },
  {
    "name": "Park Hae-soo",
    "role": "Actor (Cho Sang-woo)",
    "description": "Brilliantly portrays a conflicted character driven by debt and desperation.",
    "image": "",
    "linkedinUrl": "https://linkedin.com/in/park-hae-soo",
    "dribbbleUrl": "https://dribbble.com/park-hae-soo",
    "closeUrl": "https://example.com/close"
  },
  {
    "name": "Jung Ho-yeon",
    "role": "Actress (Kang Sae-byeok)",
    "description": "Runway model turned actress who became a global sensation with her breakout role.",
    "image": "",
    "linkedinUrl": "https://linkedin.com/in/jung-ho-yeon",
    "dribbbleUrl": "https://dribbble.com/jung-ho-yeon",
    "closeUrl": "https://example.com/close"
  },
  {
    "name": "O Yeong-su",
    "role": "Actor (Oh Il-nam)",
    "description": "Veteran actor delivering a deeply emotional and surprising performance as the oldest player.",
    "image": "",
    "linkedinUrl": "https://linkedin.com/in/o-yeong-su",
    "dribbbleUrl": "https://dribbble.com/o-yeong-su",
    "closeUrl": "https://example.com/close"
  },
  {
    "name": "Anupam Tripathi",
    "role": "Actor (Ali Abdul)",
    "description": "Indian actor capturing hearts worldwide with his honest and touching portrayal.",
    "image": "",
    "linkedinUrl": "https://linkedin.com/in/anupam-tripathi",
    "dribbbleUrl": "https://dribbble.com/anupam-tripathi",
    "closeUrl": "https://example.com/close"
  },
  {
    "name": "Wi Ha-joon",
    "role": "Actor (Hwang Jun-ho)",
    "description": "Plays the determined police officer investigating the deadly games behind the scenes.",
    "image": "",
    "linkedinUrl": "https://linkedin.com/in/wi-ha-joon",
    "dribbbleUrl": "https://dribbble.com/wi-ha-joon",
    "closeUrl": "https://example.com/close"
  },
  {
    "name": "Kim Joo-ryoung",
    "role": "Actress (Han Mi-nyeo)",
    "description": "Scene-stealing character bringing chaos, humor, and unpredictability to the games.",
    "image": "",
    "linkedinUrl": "https://linkedin.com/in/kim-joo-ryoung",
    "dribbbleUrl": "https://dribbble.com/kim-joo-ryoung",
    "closeUrl": "https://example.com/close"
  }
]



  
  return (
    <div className="bg-black text-white">
      {/*Header Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-4 md:px-0 pt-32 md:pt-20 pb-20 min-h-screen  bg-black">
        <div className="md:w-1/2 text-center md:pl-12 md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            Join the Squid Game Challenge
          </h1>
          <p className="text-base md:text-lg mb-8 max-w-md mx-auto md:mx-0">
            Enter a world where every decision could mean life or death. Explore
            the dark side of human nature and see what it takes to survive in a
            game with everything at stake.
          </p>
          <Link to="/watchnow">
          <button className="bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-full transition">
            Watch Now
          </button>
          </Link> 
        </div>

        <div className="md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
          <img
            src="https://res.cloudinary.com/dkqavgpy8/image/upload/v1757517524/1_rgh0w1.png"
            alt="Squid Game Guards"
            className="max-w-xs md:max-w-sm lg:max-w-md"
          />
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-black to-slate-900 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">What viewers are saying</h2>
        <p className="max-w-2xl mx-auto text-base md:text-lg italic mb-4">
          "An absolutely thrilling and mind-bending series. Squid Game keeps you
          on the edge of your seat until the very end!"
        </p>
        <p className="max-w-2xl mx-auto text-base md:text-lg italic mb-4">
          "A brilliant critique of modern society's obsession with wealth and
          power, wrapped in a gripping survival story."
        </p>
        <p className="max-w-2xl mx-auto text-base md:text-lg italic">
          "The characters are deeply flawed yet relatable, making each loss feel
          devastatingly personal. A must-watch!"
        </p>
      </section>

      {/* Feature  */}
      <section className="py-20 md:py-40 px-4 md:px-8 bg-gradient-to-b from-slate-900 to-black text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Experience the thrill</h2>
        <p className="max-w-2xl mx-auto text-base md:text-lg mb-4">
          Step into a world where ordinary people are pushed to their limits in
          a desperate fight for survival and money. Every challenge is designed
          to test their instincts, morality, and determination.
        </p>
        <p className="max-w-2xl mx-auto text-base md:text-lg mb-4">
          The games, inspired by childhood classics, hide sinister traps beneath
          their simple exteriors. Each round reveals deeper truths about greed,
          humanity, and the true cost of survival.
        </p>
        <p className="max-w-2xl mx-auto text-base md:text-lg">
          Can you imagine facing your friends in a game where only one can
          survive? Welcome to Squid Game — where the stakes are as high as they
          get.
        </p>
      </section>

      {/* Features List*/}
      <section className="py-20 px-4 md:px-8 bg-black text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-10">
          What makes Squid Game special
        </h2>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          <div className="bg-gray-900 p-6 rounded shadow-lg flex-1">
            <h3 className="text-lg md:text-xl font-bold mb-2">Deadly Games</h3>
            <p className="mb-2 text-sm md:text-base">
              More than just simple contests — each game is a psychological
              labyrinth where trust, betrayal, and fear collide.
            </p>
            <p className="text-sm md:text-base">
              Every move could be your last. Will you follow your heart or your
              survival instinct?
            </p>
          </div>
          <div className="bg-gray-900 p-6 rounded shadow-lg flex-1">
            <h3 className="text-lg md:text-xl font-bold mb-2">Unique Characters</h3>
            <p className="mb-2 text-sm md:text-base">
              A cast of deeply human characters, each with their own demons and
              reasons for joining the game.
            </p>
            <p className="text-sm md:text-base">
              From a down-on-his-luck father to a brilliant but desperate
              graduate, every story intertwines in heartbreaking ways.
            </p>
          </div>
          <div className="bg-gray-900 p-6 rounded shadow-lg flex-1">
            <h3 className="text-lg md:text-xl font-bold mb-2">Twisting Storyline</h3>
            <p className="mb-2 text-sm md:text-base">
              Expect the unexpected. Every episode is loaded with shocking
              twists and emotional turns.
            </p>
            <p className="text-sm md:text-base">
              Secrets unravel, alliances form and break, and the true
              masterminds reveal themselves in ways you'll never predict.
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="pt-20 px-4 md:px-8 bg-gradient-to-b from-black to-purple-900 text-center">
        <h2 className="text-2xl md:text-3xl font-bold pb-6">Meet the creators</h2>
        <p className="max-w-xl mx-auto text-base md:text-lg pb-4">
          The creators of Squid Game crafted an unforgettable narrative that
          speaks to universal themes of desperation and morality. Their
          storytelling genius has captivated millions worldwide.
        </p>
        <p className="max-w-xl mx-auto text-base md:text-lg pb-8">
          The incredible cast delivers powerful, emotional performances that
          make each character feel real. Learn more about the talented people
          who brought this groundbreaking series to life.
        </p>
      </section>


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 pt-5 pb-10 px-4 md:pl-4 md:pr-4 bg-gradient-to-b from-purple-900 to-black">
    {teamData.map((member, index) => (
      <Card
        key={index}
        image={member.image}
        name={member.name}
        role={member.role}
        description={member.description}
        linkedinUrl={member.linkedinUrl}
        dribbbleUrl={member.dribbbleUrl}
        closeUrl={member.closeUrl}
      />
    ))}
  </div>
          


      {/* Footer */}
      <footer className="py-8 px-8 bg-black text-center text-gray-500">
        &copy; {new Date().getFullYear()} Squid Game. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
