'use client';
import React from 'react';
import TopButton from '@/components/TopButton';
import '@/styles/page.scss';
import Footer from '@/views/Footer';
import Developer from '@/views/Developer';
import Hero from '@/views/Hero';
import Navbar from '@/views/Navbar';
import Projects from '@/views/Projects';
import Skills from '@/views/Skills';
import WelcomeScreen from '@/views/WelcomeScreen';
import ContextWrapper from './ContextWrapper';

const Home = () => {
  return (
    <ContextWrapper>
      <div id="app">
        <WelcomeScreen />
        <Navbar />
        {/* <TopButton /> */}
        <Hero />
        <Skills />
        <Projects />
        <Developer />
        <Footer />
      </div>
    </ContextWrapper>
  );
};

export default Home;
