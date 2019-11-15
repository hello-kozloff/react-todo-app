import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import {
  AuthorizationPage,
  RegisterPage,
  RegisterConformPage,
  RecoveryPage,
  ProjectsPage,
} from './components/pages';

import Header from './components/parts/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/login">
            <AuthorizationPage />
          </Route>
          <Route path="/register/confirm">
            <RegisterConformPage />
          </Route>
          <Route path="/register">
            <RegisterPage />
          </Route>
          <Route path="/recovery">
            <RecoveryPage />
          </Route>
          <Route path="/projects">
            <ProjectsPage />
          </Route>
          <Route path="/">
            Welcome page
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
