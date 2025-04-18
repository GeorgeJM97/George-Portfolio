import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <Projects />
      </main>
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} George Malayil. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
