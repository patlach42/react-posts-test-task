import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Link to="/add">Add new post</Link>
          <table>
            <thead>
              <th>User ID</th>
              <th>ID</th>
              <th>Body</th>
              <th>Title</th>
            </thead>
            <tbody>

            </tbody>
          </table>
        </Route>
        <Route path="/add">
          <input type="text"/>
          <input type="text"/>
          <input type="text"/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
