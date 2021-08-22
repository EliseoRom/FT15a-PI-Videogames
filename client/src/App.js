import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import React from 'react';
import LandingPage from './components/LandingPage/LandingPage';
import CreateGame from './components/CreateGame/CreateGame';
import Home from './components/Home/Home';
import GameDetail from './components/GameDetail/GameDetail';


function App() {
  return (
    <BrowserRouter>
    <Switch>
    <Route exact path="/" component={ LandingPage } />
    <Route exact path="/videogames" component={ Home } />
    <Route exact path="/videogames/:id"render={({ match }) => <GameDetail id={match.params.id} />}></Route>
    <Route exact path="/createVideogame" component={CreateGame} />
   </Switch>
    </BrowserRouter>
  );
  
}

export default App;
   