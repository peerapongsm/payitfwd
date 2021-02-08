import React from "react";
import Nav from 'react-bootstrap/Nav'
import Tab from 'react-bootstrap/Tab'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Account from './account'

export default class Setting extends React.Component {

  render() {
    return (
      <Tab.Container id="left-tabs-example" defaultActiveKey="account">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column"
              style={{ marginTop: "4.5rem", width: "15rem", marginRight: "0"}}>
              <Nav.Item>
                <Nav.Link eventKey="account">Account Setting</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="payment">Payment Setting</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9} style={{ display:"flex", marginTop: "2.5rem"}}>
            <Tab.Content>
              <Tab.Pane eventKey="account">
                <h1 style={{marginBottom: "4rem"}}>Account Setting</h1>
                <Account />
              </Tab.Pane>
              <Tab.Pane eventKey="payment">
                <h1>Payment setting</h1>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    )
  }

}
