import './App.css';
import {BrowserRouter, Route} from 'react-router-dom'
import React from 'react';
// import Nav from './components/navbar.jsx'
import Card from './components/Card/Card';
import LandingPage from './components/LandingPage/LandingPage';
import NavBar from './components/NavBar/NavBar'


function App() {
  return (
    <BrowserRouter>
    <Route exact path="/videogames" component={Card} />
    <Route exact path="/" component={ LandingPage }  />
    <Route exact path="/createVideogame" component={ ''} />
    <Route exact path="/videogames/:id" component={''} />
    <NavBar path="/videogames" component= {NavBar}  />
   
   
    </BrowserRouter>
  );
  
}

export default App;
