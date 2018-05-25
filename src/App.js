import React, { Component } from 'react';
// eslint-disable-next-line
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import CssBaseline from '@material-ui/core/CssBaseline';

import logo from './logo.svg';
import './App.css';

import indexRoutes from "./routes/index";

const hist = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <Router history={hist}>
            <Switch>
              {indexRoutes.map((prop, key) => {
                return <Route exact path={prop.path} component={prop.component} key={key} />;
              })}
            </Switch>
          </Router>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
