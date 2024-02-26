'use client';
import RunningText from '@/components/RunningText';
import TopButton from '@/components/TopButton';
import VerticalOffsetContextProvider from '@/contexts/VerticalOffsetContext';
import ViewportContextProvider from '@/contexts/ViewportContext';
import '@/styles/page.scss';
import Contacts from '@/views/Contacts';
import Footer from '@/views/Footer';
import Hero from '@/views/Hero';
import Navbar from '@/views/Navbar';
import Projects from '@/views/Projects';
import Skills from '@/views/Skills';
import WelcomeScreen from '@/views/WelcomeScreen';

export default function Home() {
  return (
    <ViewportContextProvider>
      <VerticalOffsetContextProvider>
        <div id="app">
          <WelcomeScreen />
          <Navbar />
          <TopButton />
          <Hero />
          <RunningText />
          <Skills />
          <Projects />
          <Contacts />
          <Footer />
        </div>
      </VerticalOffsetContextProvider>
    </ViewportContextProvider>
  );
}
