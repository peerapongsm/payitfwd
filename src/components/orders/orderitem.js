import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import firebase from 'firebase/app'

export default class OrderItem extends React.Component {
  
  render() {
    let order = this.props.order;
    return (
      <Card style={{ "maxWidth": '18rem', "alignItems": 'center', "margin": "1rem"}}>
        <Card.Img variant="top" src={order.menu.img} style={{ "width": '18rem', "height": "10rem", "padding": "0.5rem"}}/>
        <Card.Body>
          <Card.Title>{order.menu.name}</Card.Title>
          <Card.Text>
            Individual price:&nbsp;{order.menu.price}
          </Card.Text>
          <Card.Text>
            Allergens :&nbsp;{order.menu.allergy}
          </Card.Text>
          <Card.Text>
            Number of purchase :&nbsp;{order.unit}
          </Card.Text>
          <Card.Text>
            Total price :&nbsp;${order.price}
          </Card.Text>
          <Button variant="danger" onClick={this.handleRemove}
            style={{marginTop:"0.5rem"}}>
            Remove
          </Button>
        </Card.Body>
      </Card>
    )
  }
}
