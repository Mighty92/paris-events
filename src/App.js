import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Fav from './components/Fav';
import ListEvents from './components/ListEvents';
import About from './pages/About';
import Home from './pages/Home';
import Details from './components/Details';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <>

    {/* BrowserRouter permet de surveiller l'historique du router
    switch rend un itinéraire à partir du premier route enfant 
    Route défini une relation entre l'url et le composant c'est à dire que l'url visité correspond au path donnée   */}
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/liste-evenements" exact component={ListEvents}/>
          <Route path="/details" exact component={Details}/>
          <Route path="/favoris" exact component={Fav}/>
          <Route path="/a-propos" exact component={About}/>
          <Route component={NotFound}/>
        </Switch>
      </BrowserRouter>

    </>
  );
};

export default App;
