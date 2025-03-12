// src/pages/Contact.jsx
import React from 'react';

function Contact() {
  return (
    <main className="bg-[#0d0d0d] text-white min-h-screen">
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
        <form className="max-w-md">
          <div className="mb-4">
            <label className="block mb-1">Name</label>
            <input
              type="text"
              className="w-full p-2 rounded bg-gray-800 text-white"
              placeholder="Your name"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Email</label>
            <input
              type="email"
              className="w-full p-2 rounded bg-gray-800 text-white"
              placeholder="Your email"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Message</label>
            <textarea
              className="w-full p-2 rounded bg-gray-800 text-white"
              rows="5"
              placeholder="Your message..."
            />
          </div>
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded font-semibold"
          >
            Send
          </button>
        </form>
      </section>
    </main>
  );
}

export default Contact;
