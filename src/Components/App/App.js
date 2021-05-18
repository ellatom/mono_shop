import './App.css';
import React from 'react';
import HomePage from '../HomePage/HomePage';
import history from '../../history';

import { Router, Route, Switch } from 'react-router-dom';
import ProductDetails from '../ProductDetails/ProductDetails';

const App = () => {

  return (
    <Router history={history}>
      <div>
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/products/:id" component={ProductDetails} />
        </Switch>
      </div>
    </Router>
  )
};


export default App;

  // return (
  //   <div className="homepage_container">
  //     <div className= 'light-bg'>
  //     <HomePage/>
  //     </div>
  //   </div>

  // );