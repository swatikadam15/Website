import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Movies from './components/pages/Movies';
import Series from './components/pages/Series';
// import Details from './components/pages/Details';
import Movie from "./components/Movie"
import Star from "./components/Star"
import War from "./components/War"


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/movies' component={Movies} />
          <Route path='/series' component={Series} />
      
         
          <Route exact path="/movie" component={Movie}/>
          
         
            <Route exact path="/ep2" component={Star}/>
             

            <Route exact path="/ep3" component={War}/>
         
        
        </Switch>
      </Router>
    </>
  );
}

export default App;
