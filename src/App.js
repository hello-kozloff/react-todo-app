import React from 'react';

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import { AnimatedSwitch } from 'react-router-transition';

import {
  AuthorizationPage,
  RegisterPage,
  RegisterConformPage,
  RecoveryPage,
  ProjectsPage,
  ProjectPage,
} from './components/pages';

import Header from './components/parts/Header';

import pageClasses from './styles/Page.module.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <AnimatedSwitch
          atEnter={{ opacity: 0 }}
          atLeave={{ opacity: 0 }}
          atActive={{ opacity: 1 }}
          className={pageClasses.animatedSwitch}
        >
          <Route exact path="/">
            Welcome page
          </Route>
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
          <Route
            path="/project/create"
          >
            Create page
          </Route>
          <Route
            path="/project/:slug"
            component={ProjectPage}
          />
        </AnimatedSwitch>
      </Router>
    </div>
  );
}

export default App;
