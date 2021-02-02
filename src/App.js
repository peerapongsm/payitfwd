import Menu from './menu';
import React from 'react';
import './App.css';
import Login from './login';
import Signup from './signup';
import {Route, Switch} from 'react-router-dom';

class App extends React.Component  {

  render() {
    return (
      <div className="App">
        <Menu/>
        <Switch>
          <Route exact path="/">
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/signup">
            <Signup/>
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
