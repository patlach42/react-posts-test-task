import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './App.css';
import AddPage from './Pages/AddPage.js'
import PostListPage from './Pages/PostListPage.js'


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <PostListPage />
        </Route>
        <Route path="/add">
          <AddPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
