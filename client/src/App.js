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
    <Route exact path="/" component={ LandingPage }  />
    <Route exact path="/videogames" component={Card} />
    <NavBar path="/videogames" component= {NavBar}  />
    <Route exact path="/videogames/:id" component={''} />
    <Route exact path="/createVideogame" component={ '' } />
   
    </BrowserRouter>
  );
  
}

export default App;
