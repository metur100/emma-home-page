import React from 'react';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import About from './components/About';
import Features from './components/Features';
import Banner from './components/Banner';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Download from './components/Download';

const App: React.FC = () => {
  return (
    <div className="app">
      <Navbar />
      <div className="scrollable-content">
        {/* Each component below will be rendered on the same page in order */}
        <Banner />
        <About />
        <Features />
        <Team />
        <Testimonials />
        <FAQ />
        <Contact />
        <Download />
        <Footer />
      </div>
    </div>
  );
};

export default App;
