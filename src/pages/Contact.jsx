import React from 'react'

const Contact = () => {
  return (
    <div className="bg-gradient-to-b from-black via-purple-900 to-black min-h-screen text-white pt-40">
      <section className=" text-center">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="max-w-xl mx-auto text-lg">
          We'd love to hear from you! Get in touch with us for any questions, feedback, or partnership opportunities.
        </p>
      </section>

     

      {/* Contact Form Section */}
      <section className="py-16 px-8">
        <h2 className="text-3xl font-bold mb-6 text-center">Send Us a Message</h2>
        <form className="max-w-2xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg text-center">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded bg-gray-900 text-white focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded bg-gray-900 text-white focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full p-3 rounded bg-gray-900 text-white focus:outline-none"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-full transition"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-8 text-center">
        <h2 className="text-3xl font-bold mb-6">Subscribe to Our Newsletter</h2>
        <p className="max-w-xl mx-auto mb-6">
          Stay up-to-date on the latest Squid Game news, updates, and exclusive content by subscribing to our newsletter.
        </p>
        <form className="max-w-lg mx-auto flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 p-3 rounded bg-gray-900 text-white focus:outline-none"
          />
          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-full transition"
          >
            Subscribe
          </button>
        </form>
      </section>

       {/* Contact Section */}
      <section className="py-16 px-8 ">
        <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
        <p className="mb-2">📧 Email: support@squidgame.com</p>
        <p className="mb-2">📞 Phone: +82 123-456-789</p>
        <p>🏢 Address: 123 Survival St, Seoul, South Korea</p>
      </section>

      {/* Footer */}
      <footer className="py-8 px-8  text-center text-gray-500">
        &copy; {new Date().getFullYear()} Squid Game. All rights reserved.
      </footer>
      
    </div>
  )
}

export default Contact
