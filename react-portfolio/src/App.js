import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
    return (
        <Router>
            <Header />
            <Switch>
                <Route exact path="/about">
                    <About />
                </Route>
                <Route exact path="/portfolio">
                    <Portfolio />
                </Route>
                <Route exact path="/contact">
                    <Contact />
                </Route>
                <Route exact path="/resume">
                    <Resume />
                </Route>
                <Route exact path="/">
                    <About />
                </Route>
            </Switch>
            <Footer />
        </Router>
    );
}

export default App;
