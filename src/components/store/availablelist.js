import React from "react";
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import firebase from 'firebase/app';

export default class AvaialableList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      orders: null
    }
  }

  componentDidMount() {
    let tempArr = [];
    firebase.database().ref('ready').on('value', (snap) => {
      snap.forEach((a) => {
        a.forEach((b) => {
          tempArr.push(b.val());
        });
      })
      this.setState({orders: tempArr});
    });
  }

  componentWillUnmount() {
    firebase.database().ref('ready').off();
  }

  render() {
    let orders = this.state.orders;
    if (!orders) {
      orders = JSON.parse(window.localStorage.getItem('orders'));
    }
    if (!orders || orders.length < 1) return <h2 style={{marginTop:"20rem"}}>No food available :( </h2>
    let id = orders[orders.length - 1];

    if (orders.length > 1) {
      orders.forEach((order) => {
        if (!order.unit && order.unit < 1) {
          if (order.id) {
            firebase.database().ref('ready').child(id).child(order.id).remove();
          }
        }
      });
    } else {
      firebase.database().ref('ready').child(id).remove();
    }



    let orderCards = orders.map((order) => {
        if (order.restaurant !== undefined) {
          return <OrderCard key={order.id} id={id} order={order}/>;
        } else {
          return <></>;
        }
    })
    return (
      <CardDeck style={{ margin: "2.5rem"}}>
        {orderCards}
      </CardDeck>
    );
  }
}

class OrderCard extends React.Component {

    constructor(props){
      super(props);
      this.state = {
        unit: 1
      };
    }

    handleRemove = (event) => {
      event.preventDefault();
      let newVal = this.props.order.unit - this.state.unit;
      firebase.database().ref('ready').child(this.props.id).child(this.props.order.id).update({"unit": newVal});
      alert("Enjoy your meal!");
      window.location.reload();
    }

    handleChange = (event) => {
      event.preventDefault();
      let field = event.target.name;
      let value = parseFloat(event.target.value);
      let changes = {};
      changes[field] = value;
      this.setState(changes);
    }

    render() {
      let order= this.props.order;

      return (
        <Card style={{ "minWidth": '18rem', "alignItems": 'center', "margin": "1rem"}}>
          <Card.Img variant="top" src={order.menu.img} style={{ "width": '18rem', "height": "10rem", "padding": "0.5rem"}}/>
          <Card.Body>
            <Card.Title>Available : {order.unit}</Card.Title>
            <Card.Text>
              Come pick {order.menu.name} at {order.restaurant} for free!
            </Card.Text>
          </Card.Body>
          <Form onSubmit={this.handleRemove}>
            <Form.Group controlId="formBasicEmail">
              <Form.Control name="unit" type="number" defaultValue={1} onChange={this.handleChange}
                style={{textAlign:"center", width:"7rem"}}/>
            </Form.Group>
            <Button variant="warning" type="submit"
              disabled={this.state.unit < 1 || this.state.unit > this.props.order.unit}
              style={{marginBottom:"1rem"}}>
              Take
            </Button>
          </Form>
        </Card>
      )
    }
}
