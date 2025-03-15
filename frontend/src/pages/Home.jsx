import React from 'react'
import HeroSection from '../components/home/hero/HeroSection';
import AboutUs from '../components/home/about-us/AboutUs';

const Home = () => {
  return (
    <div className='w-full bg-amber-100'>
      <ul>
        <li>
          <HeroSection />
        </li>
        <li>
          <AboutUs />
        </li>
        <li>Services</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>
    </div>
  )
}

export default Home