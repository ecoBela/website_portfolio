import React from 'react';
import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Projects from './containers/Projects';
import Contact from './components/Contact';
import Error from './components/Error';
import NavigationBar from './components/NavigationBar';
import Jumbotron from './components/Jumbotron';


const App = () => {
  return (
    <>
    <NavigationBar/>
    <Jumbotron></Jumbotron>
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/projects" component={Projects}/>
        <Route path="/contact" component={Contact}/>
        <Route component={Error}/>
      </Switch>
    </Router>

    </>
    
  );
}

export default App;
