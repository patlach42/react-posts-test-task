import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import PostAddPage from './Pages/PostAddPage.js'
import PostListPage from './Pages/PostListPage.js'


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <PostListPage />
        </Route>
        <Route path="/add">
          <PostAddPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
