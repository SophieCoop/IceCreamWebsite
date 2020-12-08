import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import HomePage from './components/homePage';
import ItemPage from './components/itemPage';
import Cart from './components/cartPage';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path={"/"} component={HomePage} />
        <Route path={"/icecreamItem"} component={ItemPage} />
        <Route path={"/cart"} component={Cart} />
      </Router>
    </div>
  );
}

export default App;
