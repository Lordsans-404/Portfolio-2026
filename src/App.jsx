import React from 'react';
import Dock from './components/Dock';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import { Contact, Footer } from './components/Contact';



function App() {
    return (
        <div className="bg-black min-h-screen text-white selection:bg-white selection:text-black">
            <Dock />
            <Hero />
            <About />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;