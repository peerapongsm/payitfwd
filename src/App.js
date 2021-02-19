import Menu from './components/menu/menu';
import React from 'react';
import './App.css';
import Login from './components/authentication/login';
import Signup from './components/authentication/signup';
import StoreList from './components/store/storelist';
import StorePage  from './components/store/storepage';
import AvaialableList from './components/store/availablelist';
import Order from './components/orders/order';
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
      loading: true,
      ready: []
    }
  }

  componentDidMount() {

    this.authUnRegFunc = firebase.auth().onAuthStateChanged((firebaseUser) => {
      if (firebaseUser) {
        this.setState({user: firebaseUser});
        window.localStorage.setItem('user', firebaseUser.displayName);
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
    firebase.database().ref('stores').off();
    firebase.database().ref('ready').off();
    window.localStorage.removeItem('user');
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
            <Route exact path="/available">
              <AvaialableList user={this.state.user} />
            </Route>
            <Route exact path="/order">
              <Order name={window.localStorage.getItem('user')} />
            </Route>
            <Route exact path="/store/:storeName">
              <StorePage user={this.state.user} stores={this.state.stores}/>
            </Route>
            <Route exact path="/login">
              <Login callBack={this.handleError}/>
            </Route>
            <Route exact path="/signup">
              <Signup callBack={this.handleError}/>
            </Route>
            <Route exact path="/setting">
              <Setting />
            </Route>
          </Switch>
        </div>
      );
    }
  }
}

export default App;
