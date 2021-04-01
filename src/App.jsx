import React from 'react';
import { Provider } from 'react-redux';
import SimpleReactLightbox from 'simple-react-lightbox';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import store from './store/store';

import Home from './scenes/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Blog from './components/Blog/Blog';
import BlogSingle from './components/Blog/BlogSingle';
import About from './components/About';
import Friends from './components/Friends';
import Contact from './components/Contact';

import 'leaflet/dist/leaflet.css';

function App() {
  return (
    <SimpleReactLightbox>
      <Provider store={store}>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/wyprawy/" component={Blog} />
            <Route exact path="/wyprawy/:id" component={BlogSingle} />
            <Route exact path="/kim-jestesmy/" component={About} />
            <Route exact path="/przyjaciele/" component={Friends} />
            <Route exact path="/kontakt/" component={Contact} />
          </Switch>
          <Footer />
        </Router>
      </Provider>
    </SimpleReactLightbox>
  );
}

export default App;
