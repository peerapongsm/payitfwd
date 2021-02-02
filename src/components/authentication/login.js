import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import firebase from "firebase/app";
import { Redirect } from 'react-router-dom'
import "./login.css";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'email': undefined,
      'password': undefined,
      'submitted': false
    };
  }

  handleChange = (event) => {
    let field = event.target.name;
    let value = event.target.value;
    let changes = {};
    changes[field] = value;
    this.setState(changes);
  }

  handleSignIn = (event) => {
    event.preventDefault();
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
    .then(this.setState({submitted: true}))
    .catch( (e)  => {
      this.setState({submitted: false});
      this.props.callBack(e);
    })

  }


  render () {
    if (this.state.submitted) {
      return (
        <Redirect to="/"/>
      )
    } else {
      return (
        <div className="Login">
          <Form onSubmit={this.handleSignIn}>
            <Form.Group size="lg" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                autoFocus
                name="email"
                type="email"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group size="lg" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                name="password"
                type="password"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Button block size="lg" type="submit">
              Login
            </Button>
          </Form>
          <Form.Text id="signup">
            Or <a href='/signup'>Sign up </a> if you don't have an account.
          </Form.Text>
        </div>
      );
    }
  }
}
