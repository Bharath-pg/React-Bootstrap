import React from 'react';
import './App.css';
import Buttons from "./components/Buttons";
import Grids from "./components/Grids";

function App() {
  return (
    <div className="text-center bg-transparent"><br />
      <div class="p-3 mb-2 bg-dark text-white">
        <h3>
        React with Bootstrap components
        </h3>
        
        </div>
        <br />
     
      <Buttons />
      <br />
      <Grids />
    </div>

    
  );
};

export default App;