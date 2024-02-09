import '@/styles/page.scss';
import Contacts from '@/views/Contacts';
import Footer from '@/views/Footer';
import Hero from '@/views/Hero';
import Skills from '@/views/Skills';

export default function Home() {
  return (
    <div id="app">
      <Hero />
      <Skills />
      <Contacts />
      <Footer />
    </div>
  );
}
