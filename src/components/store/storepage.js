import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import firebase from 'firebase/app'

export default class StorePage extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      store: undefined
    };
  }

  componentDidMount() {
    let storeName = window.location.pathname;
    let stores = this.props.stores;
    for (let i = 0; i < stores.length; i++) {
      if ("/store/" + stores[i].restaurant.replace(" ", "%20") === storeName) {
        this.setState({store: stores[i]});
        window.localStorage.setItem('store', JSON.stringify(stores[i]));
        break;
      }
    }
  }

  componentWillUnmount() {
    window.localStorage.clear();
  }

  render() {
    let store;

    if (this.state.store !== undefined  && !this.state.store) {
      store = this.state.store;
    } else {
      store = JSON.parse(window.localStorage.getItem('store'));
    }

    if (!store) return <h2>No store specified</h2>

    let menuCards = store.menu.map((menu) => {
      return <MenuCard key={menu.name} menu={menu} user={this.props.user} restaurant={store.restaurant}/>;
    })

    return (
      <div style={{marginTop:"3rem"}}>
        <Row>
          <Col><img src={store.img} alt="Store" style={{width:"300px", height:"300px"}}/></Col>
          <Col style={{marginTop:"2rem", lineHeight:"2rem", fontSize:"large"}}>
            <Row>
              <h2>{store.restaurant}</h2>
            </Row>
            <Row>
              Store hours :&nbsp; {store.hours}
            </Row>
            <Row>
              Store address :&nbsp; {store.address}
            </Row>
          </Col>
        </Row>
        <h2>Menu</h2>
        <Row>
          <CardDeck style={{ margin: "2.5rem 7rem"}}>
            {menuCards}
          </CardDeck>
        </Row>
      </div>
    );
  }
}

class MenuCard extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      unit: 1
    };
  }

  handleOrder = (event) => {
    event.preventDefault();
    let price = Number(this.props.menu.price.replace(/[^0-9.-]+/g,"")) * this.state.unit;
    let newOrder = {
      restaurant: this.props.restaurant,
      menu: this.props.menu,
      price: price,
      unit: this.state.unit
    }
    let name = this.props.user.displayName;
    firebase.database().ref(name).push(newOrder);
    this.setState({unit: undefined});
    alert("Your order was added into cart");
  }

  handleChange = (event) => {
    let field = event.target.name;
    let value = parseFloat(event.target.value);
    let changes = {};
    changes[field] = value;
    this.setState(changes);
  }

  render() {
    let menu = this.props.menu;
    let user = this.props.user;
    if (user !== undefined) {
      return (
        <Card style={{ "minWidth": '18rem', "alignItems": 'center', "margin": "1rem"}}>
          <Card.Img variant="top" src={menu.img} style={{ "width": '18rem', "height": "10rem", "padding": "0.5rem"}}/>
          <Card.Body>
            <Card.Title>{menu.name}</Card.Title>
            <Card.Text>
              {menu.price}
            </Card.Text>
            <Card.Text>
              Allergens :&nbsp;{menu.allergy}
            </Card.Text>
          </Card.Body>
          <Form onSubmit={this.handleOrder}>
            <Form.Group controlId="formBasicEmail">
              <Form.Control name="unit" type="number" defaultValue={1} onChange={this.handleChange}
                style={{textAlign:"center", width:"7rem"}}/>
            </Form.Group>
            <Button type="submit" disabled={this.state.unit < 1}
              style={{marginBottom:"1rem", width:"7rem"}}>
              Add to cart
            </Button>
          </Form>
        </Card>
      )
    } else {
      return (
        <Card style={{ "minWidth": '18rem', "alignItems": 'center', "margin": "1rem"}}>
          <Card.Img variant="top" src={menu.img} style={{ "width": '18rem', "height": "10rem", "padding": "0.5rem"}}/>
          <Card.Body>
            <Card.Title>{menu.name}</Card.Title>
            <Card.Text>
              {menu.price}
            </Card.Text>
            <Card.Text>
              Allergens :&nbsp;{menu.allergy}
            </Card.Text>
          </Card.Body>
        </Card>
      )
    }

  }
}
