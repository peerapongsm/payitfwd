import Menu from './components/menu/menu';
import React from 'react';
import './App.css';
import Login from './components/authentication/login';
import Signup from './components/authentication/signup';
import StoreList from './components/store/storelist';
import Setting from './components/account/setting';
import Spinner from 'react-bootstrap/Spinner'
import {Route, Switch} from 'react-router-dom';
import firebase from "firebase/app";

class App extends React.Component  {

  constructor(props) {
    super(props);
    this.state  = {
      user: undefined,
      stores: [],
      loading: true
    }
  }

  componentDidMount() {

    this.authUnRegFunc = firebase.auth().onAuthStateChanged((firebaseUser) => {
      if (firebaseUser) {
        this.setState({user: firebaseUser});
      } else {
        this.setState({user: undefined});
      }
    })

    firebase.database().ref('stores').on('value', (snap) => {
      let val = snap.val();
      this.setState({stores: val});
    });

    this.setState({loading: false});
  }

  componentWillUnmount() {
    this.authUnRegFunc();
  }

  handleError = (err) => {
    alert(err);
  }

  handleSignOut = () => {
    firebase.auth().signOut();
  }

  render() {
    if (this.state.loading) {
      return (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      )
    } else {
      return (
        <div className="App">
          <Menu user={this.state.user} callBack={this.handleSignOut}/>
          <Switch>
            <Route exact path="/">
              <StoreList stores={this.state.stores}/>
            </Route>
            <Route path="/login">
              <Login callBack={this.handleError}/>
            </Route>
            <Route path="/signup">
              <Signup callBack={this.handleError}/>
            </Route>
            <Route path="/setting">
              <Setting />
            </Route>
          </Switch>
        </div>
      );
    }
  }
}

export default App;
