import Navbar from './scenes/Navbar';
import DotGroup from './scenes/DotGroup';
import Landing from './scenes/Landing';
import MySkills from './scenes/MySkills';
import Projects from './scenes/Projects';
import About from './scenes/About';
import Contact from './scenes/Contact';
import Footer from './scenes/Footer';
import { useEffect, useState } from 'react';
import LineGradient from './components/LineGradient';
import useMediaQuery from './hooks/useMediaQuery';

function App() {
  const [selectedPage, setSelectedPage] = useState('home'); // Will determine what part of the navigation of the website we are at
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)'); // Will check if the min-width of the browser of the user is less than 1060 or above 1060

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) setIsTopOfPage(true);
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='app bg-deep-blue'>
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPag={setSelectedPage}
      />
      <div className='w-5/6 mx-auto md:h-full'>
        {isAboveMediumScreens && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
        <Landing setSelectedPag={setSelectedPage} />
      </div>
      <LineGradient />
      <div className='w-5/6 mx-auto md:h-full'>
        <MySkills />
      </div>
      <LineGradient />
      <div className='w-5/6 mx-auto'>
        <Projects />
      </div>
      <LineGradient />
      <div className='w-5/6 mx-auto md:h-full'>
        <About />
      </div>
      <LineGradient />
      <div className='w-5/6 mx-auto md:h-full'>
        <Contact />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
