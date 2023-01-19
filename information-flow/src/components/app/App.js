import React from 'react';
import Navbar from '../Navbar/Navbar';
import './App.css';
import About from '../about/About';
import Search from '../Search/Search';

function App() {
  return (
    <div>
    <Navbar/>
    <About/>
    <Search/>
    </div>
  );
}

export default App;
