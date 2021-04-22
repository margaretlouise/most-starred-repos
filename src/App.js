import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// components
import RepoListContainer from './components/containers/repoListContainer.js';
import RepoDetailsContainer from './components/containers/repoDetailsContainer.js';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <RepoListContainer />
        </Route>
        <Route path="/details/:owner/:repo">
          <RepoDetailsContainer />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
