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
import Skills from '@/views/Skills';

export default function Home() {
  return (
    <ViewportContextProvider>
      <VerticalOffsetContextProvider>
        <div id="app">
          <Navbar />
          <TopButton />
          <Hero />
          <RunningText />
          <Skills />
          <Contacts />
          <Footer />
        </div>
      </VerticalOffsetContextProvider>
    </ViewportContextProvider>
  );
}
