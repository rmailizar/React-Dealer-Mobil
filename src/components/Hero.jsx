import React from 'react'
import hero from "../assets/bmw-hero.jpg"

function Hero() {
  return (
    <>
    <section
      className="relative h-[70vh] md:h-[90vh] w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${hero})` }}
    >
      {/* Overlay hitam transparan */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Konten di atas overlay */}
      <div className="relative z-10 h-full flex flex-col justify-center items-start px-10 md:px-24 text-white">
        <h1 className="text-4xl md:text-7xl font-bold mb-4">BMW Cilegon</h1>
        <p className="text-xl md:text-2xl mb-6">
          Website resmi Dealer BMW Cilegon. <br></br> Informasi promo, diskon, harga dan penjualan.
        </p>
        <a href="#product" className="group inline-flex items-center bg-blue-800 hover:bg-blue-900 text-white px-6 py-3 rounded font-semibold transition-all duration-900 overflow-hidden">
          <span className="inline-block transform transition-transform duration-30 group-hover:-translate-x-1">
            Our Product
          </span>
          <span className="ml-1 inline-block transform translate-x-[-10px] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
            &gt;
          </span>
        </a>
      </div>
    </section>
    </>
  )
}

export default Hero
