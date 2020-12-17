import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './scenes/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Blog from './components/Blog/Blog';
import BlogSingle from './components/Blog/BlogSingle';

import 'leaflet/dist/leaflet.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/wyprawy/" component={Blog} />
        <Route exact path="/wyprawy/:id" component={BlogSingle} />
        {/* <Route exact path='/kim-jestesmy/' component={About} />
        <Route exact path='/kontakt/' component={Contact} />
        <Route exact path='/przyjaciele/' component={Friends} /> */}
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
