import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import firebase from "firebase/app";
import { Redirect } from 'react-router-dom'
import "./signup.css";

export default class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'email': undefined,
      'password': undefined,
      'confirmedPassword': undefined,
      'submitted': false
    }
  }

  handleChange = (event) => {
      let field = event.target.name;
      let value = event.target.value;
      let changes = {};
      changes[field] = value;
      this.setState(changes);
  }

  handleSignUp = (event) => {
      event.preventDefault();
      firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((userCredential) => {
        var user = userCredential.user;
        var updatePromise = user.updateProfile({
          displayName: this.state.email.split("@")[0]
        })
        this.setState({submitted: true});
        return updatePromise;
      })
      .catch( (e)  => {
        this.setState({submitted: false});
        this.props.callBack(e);
      })
  }

  render() {
    if (this.state.submitted) {
      return (
        <Redirect to="/"/>
      )
    } else {
      return (
        <div className="Signup">
          <Form onSubmit={this.handleSignUp}>
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
            <Form.Group size="lg" controlId="confirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                name="confirmedPassword"
                type="password"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Button block size="lg" type="submit"
              disabled={this.state.password.length === 0 && this.state.password !== this.state.confirmPassword}>
              Sign up
            </Button>
          </Form>
        </div>
      );
    }
  }
}
