import React from "react";
import firebase from 'firebase/app';
import CardDeck from 'react-bootstrap/CardDeck';
import OrderItem from './orderitem';
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button';

export default class Order extends React.Component {

  constructor(props){
    super(props);
    this.totalPrice = 0;
    this.state = {orders: null};
  }

  componentDidMount() {
     this.ordersRef = firebase.database().ref(this.props.name);
     this.ordersRef.on('value', (snapshot) => {
      let value = snapshot.val();
      this.setState({orders: value});
    });
  }

  componentWillUnmount() {
    if (this.props.name !== undefined && this.props.name !== null) {
      firebase.database().ref(this.props.name).off();
    }
    window.localStorage.removeItem('user');
  }

  handlePrice = (n) => {
    this.totalPrice += n;
  }

  handleCheckOut = (event) => {
    event.preventDefault();
    let transactionRef = firebase.database().ref('ready').push(this.state.orders);
    transactionRef.update({"id":transactionRef.key});
    firebase.database().ref(this.props.name).remove();
    alert("You have successfully paid it forward!");
  }

  render () {
    if(!this.state.orders) return <h2 style={{marginTop:"20rem"}}>You haven't made any order yet.</h2>

    let ordersItem;

    let orderArr = Object.keys(this.state.orders).map( (key) => {
        let orderObj = this.state.orders[key];
        orderObj.id = key;
        return orderObj;
    })
    this.handlePrice(-this.totalPrice); // clear old totalprice;
    ordersItem = orderArr.map( (item) => {
        this.handlePrice(item.price);
        return <OrderItem key={item.id} name={this.props.name} order={item} callBack={this.handlePrice}/>
    })

    return (
      <Container>
      <h2 style={{margin:"2rem"}}> Current items in your cart are: </h2>
      <CardDeck style={{marginLeft:"2rem", marginRight:"2rem"}}>
        {ordersItem}
      </CardDeck>
      <h2 style={{marginTop:"2rem"}}>Your total price is: ${Math.round((this.totalPrice + Number.EPSILON) * 100) / 100}</h2>
      <Button variant="warning" onClick={this.handleCheckOut}
        style={{marginTop: "1.5rem", width:"10vw", height:"6vh"}}>
        Check Out
      </Button>
    </Container>
    );
  }
}
