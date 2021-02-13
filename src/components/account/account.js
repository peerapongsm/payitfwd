import React from "react";
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

export default class Account extends React.Component {

  render() {
    return (
      <Form style={{width:"45vw"}}>
            <Form.Row>
              <Form.Group as={Col} size="lg">
                <Form.Control
                  required
                  type="text"
                  placeholder="First name"
                />
              </Form.Group>
              <Form.Group as={Col} size="lg">
                <Form.Control
                  required
                  type="text"
                  placeholder="Last name"
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} size="lg">
                <Form.Control
                  required
                  type="tel"
                  placeholder="Phone number"
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} size="lg">
                <Form.Control type="text" placeholder="City" required />
              </Form.Group>
              <Form.Group as={Col} size="lg">
                <Form.Control type="text" placeholder="State" required />
              </Form.Group>
              <Form.Group as={Col} size="lg">
                <Form.Control type="text" placeholder="Zip" required />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} size="lg">
                <Form.Control
                  required
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} size="lg">
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
