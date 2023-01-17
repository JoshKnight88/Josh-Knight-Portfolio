import { BrowserRouter } from 'react-router-dom';

import { About } from './components/page-segments/about';
import { Contact } from './components/page-segments/contact';
import { Projects } from './components/page-segments/projects';

import './assets/fonts.css';

function App() {
  return (
    <>
      <BrowserRouter>
          <About />
          <Projects />
          <Contact />
      </BrowserRouter>
    </>
  );
}

export default App;
