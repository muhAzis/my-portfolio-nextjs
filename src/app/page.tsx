import React from 'react';
import TopButton from '@/components/TopButton';
import '@/styles/HomePage.scss';
import Footer from '@/views/Footer';
import Developer from '@/views/Developer';
import Hero from '@/views/Hero';
import Navbar from '@/views/Navbar';
import Projects from '@/views/Projects';
import Skills from '@/views/Skills';
import WelcomeScreen from '@/views/WelcomeScreen';

const Home = () => {
  return (
    <div id="Home">
      <WelcomeScreen />
      <Navbar />
      {/* <TopButton /> */}
      <Hero />
      <Skills />
      <Projects />
      <Developer />
      <Footer />
    </div>
  );
};

export default Home;
