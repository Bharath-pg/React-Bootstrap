import React from 'react';
import './App.css';
import Buttons from "./components/Buttons";
import Grids from "./components/Grids";
import ReactLogo from './logo.svg';
function App() {
  return (
    <div className="text-center bg-transparent"><br />
      <div class="p-3 mb-2 bg-dark text-white">
     
    

        <h3>
        React with Bootstrap components
        </h3>
        
        </div>
        <br />
        <figure class="figure">
  <img src={ReactLogo} class="figure-img" />
  <figcaption class="figure-caption">A caption for the above image.</figcaption>
</figure>
      <Buttons />
      <br />
      <Grids />
    </div>

    
  );
};

export default App;