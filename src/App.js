import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './home/Home';
import NavBar from './navbar_footer/NavBar';
import Footer from './navbar_footer/Footer';
import Contact from './contact/Contact';
import Cv from './Cv';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/cv" component={Cv} />
        <Route path="/contact" component={Contact} />
       
      </Switch>
      <Footer />
      
    </div>
  );
}

export default App;
