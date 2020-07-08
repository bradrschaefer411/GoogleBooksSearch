import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from './Search.js';
import Saved from './saved.js';
function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/search" component={Search} />
          <Route path="/saved" component={Saved} />
        </Switch>
      </div>
    </Router>
  );
}
export default App;