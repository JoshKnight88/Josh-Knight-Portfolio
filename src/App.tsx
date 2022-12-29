import React from 'react';
import { About } from './components/about';
import { Contact } from './components/contact/contact';
import { Home } from './components/home';
import { SideNav } from './components/page-layout/side-navigation';
import { Projects } from './components/projects';

function App() {
  return (
    <>
    <SideNav />
      <Home />
      <About />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
