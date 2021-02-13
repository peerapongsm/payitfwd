import React from "react";
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Accordion from 'react-bootstrap/Accordion'

export default class Payment extends React.Component {

  render() {
    return (
      <div>
      <Form style={{margin:"2rem", width:"45vw"}}>
        <h2 style={{marginBottom: "2rem"}}> Select Card</h2>
        <Form.Check type="radio" aria-label="radio 1" label="Card ending with 1234"
          style={{display:"flex", fontSize:"large"}}/>
        <Form.Check type="radio" aria-label="radio 2" label="Card ending with 2341"
          style={{display:"flex", fontSize:"large"}}/>
        <Form.Check type="radio" aria-label="radio 3" label="Card ending with 3412"
          style={{display:"flex", fontSize:"large"}}/>
        <Form.Check type="radio" aria-label="radio 4" label="Card ending with 4123"
          style={{display:"flex", fontSize:"large"}}/>
      </Form>

      <Accordion>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              Add New Card
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Form style={{width:"45vw", margin:"1rem"}}>
                <h2 style={{marginBottom: "2rem"}}> Credit Card Information</h2>
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
                      type="text"
                      placeholder="Card number"
                    />
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col} size="lg">
                    <Form.Control
                      required
                      type="number"
                      placeholder="Month"
                    />
                  </Form.Group>
                  <Form.Group as={Col} size="lg">
                    <Form.Control
                      required
                      type="number"
                      placeholder="Year"
                    />
                  </Form.Group>
                  <Form.Group as={Col} size="lg">
                    <Form.Control
                      required
                      type="number"
                      placeholder="CVV"
                    />
                  </Form.Group>
                </Form.Row>

              <h2 style={{marginBottom: "2rem"}}>Billing address</h2>
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
                        type="text"
                        placeholder="Address"
                      />
                    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                    <Form.Group as={Col} size="lg">
                      <Form.Control type="text" placeholder="Country" required />
                    </Form.Group>
                    <Form.Group as={Col} size="lg">
                      <Form.Control type="text" placeholder="City" required />
                    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                    <Form.Group as={Col} size="lg">
                      <Form.Control type="text" placeholder="State" required />
                    </Form.Group>
                    <Form.Group as={Col} size="lg">
                      <Form.Control type="text" placeholder="Zip code" required />
                    </Form.Group>
                  </Form.Row>
                  <Button type="submit">Submit form</Button>
            </Form>
          </Accordion.Collapse>
        </Card>
      </Accordion>


      </div>
    )
  }

}
