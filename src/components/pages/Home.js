import React from 'react';
import '../../App.css';
import Cards from '../Items/Cards/Cards';
import HeroSection from '../Items/HeroSection/HeroSection';
import Footer from '../Items/Footer/Footer';

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
