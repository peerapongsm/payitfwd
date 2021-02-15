import React from "react";
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Button from 'react-bootstrap/Button';
import firebase from 'firebase/app';

export default class AvaialableList extends React.Component {

  render () {
    let id = this.props.ready[this.props.ready.length-1];
    let orders = this.props.ready;
    orders.splice(-1,1);
    if (!orders) return <h2 style={{marginTop:"20rem"}}>No food available :( </h2>
    let orderCards = orders.map((order) => {
        return <OrderCard key={order.restaurant + "/" + order.menu.name} id={id} order={order}/>;
    })
    return (
      <CardDeck style={{ margin: "2.5rem"}}>
        {orderCards}
      </CardDeck>
    );
  }
}

class OrderCard extends React.Component {

    handleRemove = (event) => {
      event.preventDefault();
      firebase.database().ref('ready').child(this.props.id).child(this.props.order.id).remove();
      alert("Enjoy your meal!");
    }

    render() {
      let order= this.props.order;

      return (
        <Card style={{ "minWidth": '18rem', "alignItems": 'center', "margin": "1rem", "cursor": "pointer"}}>
          <Card.Img variant="top" src={order.menu.img} style={{ "width": '18rem', "height": "10rem", "padding": "0.5rem"}}/>
          <Card.Body>
            <Card.Title>Available : {order.unit}</Card.Title>
            <Card.Text>
              Come pick {order.menu.name} at {order.restaurant} for free!
            </Card.Text>
          </Card.Body>
          <Button variant="warning" onClick={this.handleRemove}
            style={{marginBottom:"1rem"}}>
            Take
          </Button>
        </Card>
      )
    }
}
