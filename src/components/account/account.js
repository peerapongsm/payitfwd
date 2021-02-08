import React from "react";
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

export default class Account extends React.Component {

  render() {
    return (
      <Form>
            <Form.Row>
              <Form.Group as={Col} size="lg">
                <Form.Label>First name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter your first name"
                />
              </Form.Group>
              <Form.Group as={Col} size="lg">
                <Form.Label>Last name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter your last name"
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} size="lg">
                <Form.Label>Phone number</Form.Label>
                <Form.Control
                  required
                  type="tel"
                  placeholder="Enter your phone number"
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} size="lg">
                <Form.Label>City</Form.Label>
                <Form.Control type="text" placeholder="City" required />
              </Form.Group>
              <Form.Group as={Col} size="lg">
                <Form.Label>State</Form.Label>
                <Form.Control type="text" placeholder="State" required />
              </Form.Group>
              <Form.Group as={Col} size="lg">
                <Form.Label>Zip</Form.Label>
                <Form.Control type="text" placeholder="Zip" required />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} size="lg">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  required
                  type="password"
                  placeholder="Password"
                />
                <Form.Label>Confirm password</Form.Label>
                <Form.Control
                  required
                  type="password"
                  placeholder="Confirm password"
                />
              </Form.Group>
            </Form.Row>
            <Button type="submit">Submit form</Button>
      </Form>
    )
  }

}
