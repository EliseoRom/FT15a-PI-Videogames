import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import React from 'react';
import LandingPage from './components/LandingPage/LandingPage';
import CreateGame from './components/CreateGame/CreateGame';
import Home from './components/home/Home';
import GameDetail from './components/GameDetail/GameDetail';
import About from './components/About/About';


function App() {
  return (
    <BrowserRouter>
    <Switch>
    <Route exact path="/" component={ LandingPage } />
    <Route exact path="/videogames" component={ Home } />
    <Route exact path="/videogames/:id"render={({ match }) => <GameDetail id={match.params.id} />}></Route>
    <Route exact path="/createVideogame" component={CreateGame} />
    <Route exact path="/about" component={About} />
   </Switch>
    </BrowserRouter>
  );
  
}

export default App;
   
