import './App.css';
import {BrowserRouter} from 'react-router-dom'
import React from 'react';
// import Nav from './components/navbar.jsx'
import Card from './components/Card/Card';


function App() {
  return (
    <BrowserRouter>
    <div className="App"><h1>Henry Videogames</h1></div>
    <div className="App"><Card /> </div>
    </BrowserRouter>
  );
}

export default App;
