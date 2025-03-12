// src/pages/Shop.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Shop() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Appel à l'API pour récupérer la liste des produits
    // Adapte l'URL selon ton endpoint
    axios.get(`${process.env.REACT_APP_API_URL}/api/products`)
      .then(response => {
        console.log(response);
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des produits :', error);
      });
  }, []);

  return (
    <main className="bg-[#0d0d0d] text-white min-h-screen">
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-6">Products</h2>

        {/* Filtre et barre latérale (facultatif) */}
        <div className="flex flex-col md:flex-row">
          <aside className="md:w-1/4 mb-6 md:mb-0 md:mr-6">
            <div className="bg-my-radial p-4 rounded mb-4">
              <h3 className="font-semibold mb-2">Categories</h3>
              {/* Exemple de catégories */}
              <ul className="space-y-2">
                <li className="hover:text-green-500 cursor-pointer">Virtual Reality</li>
                <li className="hover:text-green-500 cursor-pointer">Adventure</li>
                <li className="hover:text-green-500 cursor-pointer">First-Person Shooter</li>
              </ul>
            </div>
            <div className="bg-my-radial p-4 rounded">
              <h3 className="font-semibold mb-2">Price</h3>
              <p>$10 - $20</p>
              <p>$20 - $30</p>
              <p>$40 - $50</p>
              <p>$50 - $60</p>
            </div>
          </aside>

          {/* Grille de produits */}
          <div className="md:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div key={product.id} className="p-4 rounded bg-my-radial">
                <img
                  src={`/images/${product.image}`}
                  alt={product.name}
                  className="w-full h-48 object-cover mb-4"
                />
                <h3 className="font-bold text-xl mb-2">{product.name}</h3>
                <p className="text-gray-400 mb-2">{product.description}</p>
                <p className="text-green-500 font-semibold">${product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Shop;
