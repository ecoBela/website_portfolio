import React from 'react';
import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Projects from './Containers/Projects';
import Contact from './Components/Contact';
import Error from './Components/Error';
import NavigationBar from './Components/NavigationBar';


const App = () => {
  return (
    <>
    <NavigationBar/>
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
