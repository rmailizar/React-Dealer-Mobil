import React from 'react'
import Hero from '../components/Hero'
import Product from '../components/Product'
import Services from '../components/Services'
import AboutCar from '../components/AboutCar'

function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <Product />
      <AboutCar />
    </div>
  )
}

export default Home
