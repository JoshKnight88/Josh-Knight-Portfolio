import { BrowserRouter } from 'react-router-dom';

import { About } from './components/page-segments/about';
import { Contact } from './components/page-segments/contact';
import { Projects } from './components/page-segments/projects';

import './assets/fonts.css';
import { SocialsLinks } from './components/page-layout/socials-links';

function App() {
  return (
    <>
      <BrowserRouter>
      <SocialsLinks />
        <About />
        <Projects />
        <Contact />
      </BrowserRouter>
    </>
  );
}

export default App;
