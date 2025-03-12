// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <main className="bg-[#0d0d0d] text-white min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center">
        {/* Texte */}
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Immerse Yourself In The Gaming Experience
          </h1>
          <p className="text-gray-400 mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, maxime?
          </p>
          <Link
            to="/shop"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded font-semibold"
          >
            Shop Now
          </Link>
        </div>

        {/* Image */}
        <div className="md:w-1/2 mt-8 md:mt-0 md:pl-10 flex justify-center">
          {/* Tu peux mettre une image d'un accessoire gaming, par ex. */}
          <img
            src="/images/controller.png"
            alt="Gaming Controller"
            className="max-w-full h-auto"
          />
        </div>
      </section>
    </main>
  );
}

export default Home;
