import React from "react";
// image
import bmw1 from "../assets/bmw-hero.jpg"
import bmw2 from "../assets/bmw2.jpg"
import bmw3 from "../assets/bmw3.jpg"
import bmw4 from "../assets/bmw4.jpg"
import bmw5 from "../assets/bmw5.jpg"
import bmw7 from "../assets/bmw7.jpg"
// Data produk 
const productList = [
  {
    image: bmw1,
    name: "M3 Sport",
    price: "935.000.000",
  },
  {
    image: bmw2,
    name: "M7 Series",
    price: "1.423.000.000",
  },
  {
    image: bmw3,
    name: "i8 Hybrid",
    price: "1.295.000.000",
  },
  {
    image: bmw4,
    name: "M2 SERIES",
    price: "1.015.000.000",
  },
  {
    image: bmw5,
    name: "320i Sport",
    price: "1.751.000.000",
  },
  {
    image: bmw7,
    name: "430i Coupé M Sport Pro",
    price: "2.674.000.000",
  },
];

export default function Product() {
  return (
    <div id="product" className="min-h-screen bg-[#0f0f0f] text-white my-10 py-10 px-6 md:my-0">
      <h1 className="text-3xl font-bold mb-8 text-center">Best Product</h1>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-3 justify-center">
        {productList.map((product, index) => (
          <div
            key={index}
            className="bg-[#1f1f1f] rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-1"
          >
            {/* Gambar */}
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />

            {/* Konten */}
            <div className="p-4">
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p className="text-gray-400 mt-1">Rp. {product.price}</p>
              <a href="https://wa.me/6289653479540" target="_blank" rel="noopener noreferrer" className="mt-4 block text-center w-full bg-white text-black font-semibold py-2 rounded hover:bg-gray-200 transition">
                Buy Now
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="hidden flex justify-center mt-8">
        <a href="#product" className="group inline-flex items-center bg-blue-800 hover:bg-blue-900 text-white px-6 py-3 rounded font-semibold transition-all duration-900 overflow-hidden">
          <span className="inline-block transform transition-transform duration-300 group-hover:-translate-x-1">
            See All Product
          </span>
          <span className="ml-1 inline-block transform -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
            &gt;
          </span>
        </a>
      </div>
    </div>
  );
}
