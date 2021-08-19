import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import React from 'react';
//import Card from './components/Card/Card';
import LandingPage from './components/LandingPage/LandingPage';
// import NavBar from './components/NavBar/NavBar';
import CreateGame from './components/CreateGame/CreateGame';
import Home from './components/Home/Home';
import GameDetail from './components/GameDetail/GameDetail';
/* <Route path="/videogames" component= { }  /> */

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
    // <BrowserRouter>
    //     <Route exact path="/" component={LandingPage} />

    //    <NavBar path="/home" component={NavBar} />
    //   <Switch>
    //     <Route path='/home' component={ Card }/>
    //     <Route exact path="/videogames/:id" component={""} />
    //     <Route exact path="/createVideogame" component={"CreateGame"} />
    //   </Switch>
    // </BrowserRouter>