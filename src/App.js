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
} from './components/pages';

function App() {
  return (
    <div className="App">
      <Router>
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
          <Route path="/">
            Welcome page
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
