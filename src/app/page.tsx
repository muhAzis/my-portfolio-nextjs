'use client';
import TopButton from '@/components/TopButton';
import VerticalOffsetContextProvider from '@/contexts/VerticalOffsetContext';
import ViewportContextProvider from '@/contexts/ViewportContext';
import '@/styles/page.scss';
import Footer from '@/views/Footer';
import Developer from '@/views/Developer';
import Hero from '@/views/Hero';
import Navbar from '@/views/Navbar';
import Projects from '@/views/Projects';
import Skills from '@/views/Skills';
import WelcomeScreen from '@/views/WelcomeScreen';
import UserDataContextProvider from '@/contexts/UserDataContext';
import CommentsDataContextProvider from '@/contexts/CommentsDataContext';

const Home: React.FC = () => {
  return (
    <UserDataContextProvider>
      <CommentsDataContextProvider>
        <ViewportContextProvider>
          <VerticalOffsetContextProvider>
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
          </VerticalOffsetContextProvider>
        </ViewportContextProvider>
      </CommentsDataContextProvider>
    </UserDataContextProvider>
  );
};

export default Home;
