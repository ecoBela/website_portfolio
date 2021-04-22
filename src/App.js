import React from 'react';
import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './components/About';
import Projects from './containers/Projects';
import Contact from './components/Contact';
import Error from './components/Error';
import NavigationBar from './components/NavigationBar';
import Jumbotron from './components/Jumbotron';
import Gym from './components/Gym';
import Space from './components/Space';
import Superhero from './components/Superhero';


const App = () => {
  return (
    <>
    <NavigationBar/>
    <Router>
      <Switch>
        <Route exact path="/" component={Jumbotron}/>
        <Route path="/about" component={About}/>
        <Route exact path="/projects" component={Projects}/>
        <Route exact path="/projects/gym" component={Gym}/>
        <Route exact path="/projects/space" component={Space}/>
        <Route exact path="/projects/superhero" component={Superhero}/>
        <Route path="/contact" component={Contact}/>
        <Route component={Error}/>
      </Switch>
    </Router>

    </>
    
  );
}

export default App;
