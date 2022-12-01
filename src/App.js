
import React from 'react'
import NavBar from './components/NavBar';
import Home from './components/Home';
import Portfolio from "./components/Portfolio.js";
import About  from './components/About';
import Experience from './assets/Experiance';
import SocialLinks from './components/SocialLinks';
import Contact from './components/Contact';
function App() {
  return (
    <div className="App">
      
     <NavBar/>
     <Home/>
     <About/>
     <Portfolio/>
     <Experience/>
     <SocialLinks/>
     <Contact/>
    </div>
  );
}

export default App;
