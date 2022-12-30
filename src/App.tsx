import React from 'react';
import { About } from './components/about';
import { Contact } from './components/contact';
import { Home } from './components/home';
import { SideNav } from './components/page-layout/side-navigation';
import { Projects } from './components/projects';

function App() {
  return (
    <>
      <Home />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
