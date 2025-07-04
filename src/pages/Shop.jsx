import React from 'react'

const Shop = () => {
  return (
    <div className="bg-gradient-to-b from-black via-purple-900 to-black min-h-screen text-white pt-40">
      <section className="pt-40 px-8 text-center h-screen">
        <h1 className="text-4xl font-bold mb-4">Squid Game Official Merchandise</h1>
        <p className="max-w-2xl mx-auto text-lg">
          Step into the game with exclusive Squid Game merchandise. Quality products for every true fan.
        </p>
        <a href='#call'>
        <button className='mt-7 py-3 px-4 bg-purple-700 rounded-full hover:bg-purple-900'>Let's Purchase</button>
        </a>
      </section>

      {/* Products List Section */}
      <section className="pt-40  text-center" id="call">
        <h2 className="text-3xl font-bold mb-10">Our Products</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="bg-gray-900 p-6 rounded shadow-lg w-64">
            <img
              src="https://i.ibb.co/qN9mX2F/squid-mask.png"
              alt="Squid Mask"
              className="w-full h-48 object-cover mb-4 rounded"
            />
            <p className='text-yellow-600'>$99.00</p>
            <h3 className="text-xl font-bold mb-2">Squid Game Mask</h3>
            <p>Iconic guard mask to bring the game to life at home or cosplay events.</p>
            <p className='mt-4 ml-17 mr-17 rounded-full bg-lime-500 hover:bg-lime-600 hover:scale-105 hover:cursor-pointer p-2'>Purchase Now</p>
          </div>
          <div className="bg-gray-900 p-6 rounded shadow-lg w-64">
            <img
              src="https://i.ibb.co/2jdzX5j/squid-hoodie.png"
              alt="Squid Hoodie"
              className="w-full h-48 object-cover mb-4 rounded"
            />
            <p className='text-yellow-600'>$99.00</p>
            <h3 className="text-xl font-bold mb-2">Player Hoodie</h3>
            <p>Cozy hoodie inspired by the contestants' tracksuits. Stylish & comfortable.</p>
            <p className='mt-4 ml-17 mr-17 rounded-full bg-lime-500 hover:bg-lime-600 hover:scale-105 hover:cursor-pointer p-2'>Purchase Now</p>
          </div>
          <div className="bg-gray-900 p-6 rounded shadow-lg w-64">
            <img
              src="https://i.ibb.co/FxXYq54/squid-poster.png"
              alt="Squid Poster"
              className="w-full h-48 object-cover mb-4 rounded"
            />
            <p className='text-yellow-600'>$99.00</p>
            <h3 className="text-xl font-bold mb-2">Poster Art</h3>
            <p>High-quality poster featuring Squid Game artwork. Perfect for your wall.</p>
            <p className='mt-4 ml-17 mr-17 rounded-full bg-lime-500 hover:bg-lime-600 hover:scale-105 hover:cursor-pointer p-2'>Purchase Now</p>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="pt-40 pb-20 flex text-center">
        <div className='w-1/2'>
        <h2 className="text-3xl font-bold mb-6">Why Choose Our Merchandise?</h2>
        <p className="max-w-2xl mx-auto text-lg mb-4">
          Made from premium materials and designed with authentic Squid Game details.
        </p>
        <p className="max-w-2xl mx-auto text-lg">
          Perfect for fans, collectors, or anyone who wants to stand out with iconic style.
        </p>
        </div>

        <div className='w-1/2'>
        <h2 className="text-3xl font-bold mb-6">What Fans Are Saying</h2>
        <p className="max-w-2xl mx-auto italic mb-4">
          "The hoodie is so comfy and looks exactly like the show. Love it!"
        </p>
        <p className="max-w-2xl mx-auto italic mb-4">
          "The mask is perfect for cosplay. High quality and sturdy."
        </p>
        <p className="max-w-2xl mx-auto italic">
          "I put the poster in my room and it looks incredible. Great purchase!"
        </p>
        </div>
      </section>

      {/* Pricing Section */}
      {/* <section className="py-20 px-8 text-center">
        <h2 className="text-3xl font-bold mb-6">Pricing</h2>
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-900 p-6 rounded shadow-lg">
            <h3 className="text-xl font-bold mb-2">Mask</h3>
            <p className="text-2xl mb-2">$29</p>
            <p>Durable and comfortable. One size fits most.</p>
          </div>
          <div className="bg-gray-900 p-6 rounded shadow-lg">
            <h3 className="text-xl font-bold mb-2">Hoodie</h3>
            <p className="text-2xl mb-2">$59</p>
            <p>Available in all sizes. Soft cotton blend.</p>
          </div>
          <div className="bg-gray-900 p-6 rounded shadow-lg">
            <h3 className="text-xl font-bold mb-2">Poster</h3>
            <p className="text-2xl mb-2">$19</p>
            <p>High-resolution print. Ready to frame.</p>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20 px-8  text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Join the Game?</h2>
        <p className="max-w-2xl mx-auto mb-8">
          Shop now and bring the Squid Game experience to life with official merchandise!
        </p>
        <button className="bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-full transition">
          Shop Now
        </button>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-8  text-center">
        <h2 className="text-3xl font-bold mb-6">Have Questions?</h2>
        <p className="max-w-xl mx-auto mb-8">
          Contact us for any inquiries or support related to your order.
        </p>
        <form className="max-w-xl mx-auto text-black">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 mb-4 rounded"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 mb-4 rounded"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-3 mb-4 rounded"
            rows="4"
          ></textarea>
          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-full transition"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="py-8 px-8  text-center text-gray-500">
        &copy; {new Date().getFullYear()} Squid Game Shop. All rights reserved.
      </footer>
    </div>
  )
}

export default Shop
