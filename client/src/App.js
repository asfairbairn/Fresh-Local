import React from 'react';
import {useState, useEffect} from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import ProductPage from './Components/ProductPage'
import AboutPage from './Components/AboutPage'
import OurMission from './Components/OurMission'
import HowItWorks from './Components/HowItWorks'
import TopProducers from './Components/TopProducers'
import CreateAccount from './Components/CreateAccount'
import WhyFresh from './Components/WhyFresh'

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <GamePage games={filteredGames} search={search} handleSearch={handleSearch}/>
        </Route>
        <Route path="/games/:id">
          <GameDetails API={API}/>
        </Route>
        <Route path="/genres">
          <GenrePage games={games}/>
        </Route>
        <Route path="/gameform">
          <GameForm games={games} setGames={setGames} API={API}/>
        </Route>        
      </Switch>
    </div>
  );
}

export default App;
