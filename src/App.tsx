import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import AboutMe from './components/AboutMe';
import Programs from './components/Programs';
import Mentors from './components/Mentors';
import Testimonials from './components/Testimonials';
import Resources from './components/Resources';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <AboutMe />
      <About />
      <Programs />
      <Mentors />
      <Testimonials />
      <Resources />
      <Footer />
    </div>
  );
}

export default App;