
import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck'
import Button from 'react-bootstrap/Button'

export default class StorePage extends React.Component {
  constructor(props){
    super(props);
    this.state = {store: undefined};
  }

  componentDidMount(){
    let storeName = window.location.pathname;
    let stores = this.props.stores;
    for (let i = 0; i < stores.length; i++) {
      if ("/store/" + stores[i].restaurant.replace(" ", "%20") === storeName) {
        this.setState({store: stores[i]});
        break;
      }
    }
  }

  render() {
    let store = this.state.store

    if(!store) return <h2>No store specified</h2>

    let menuCards = store.menu.map((menu) => {
      return <MenuCard key={menu.name} menu={menu}/>;
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

  render() {
    let menu = this.props.menu;
    return (
      <Card style={{ "minWidth": '18rem', "alignItems": 'center', "margin": "1rem"}}>
        <Card.Img variant="top" src={menu.img} style={{ "width": '18rem', "height": "10rem", "padding": "0.5rem"}}/>
        <Card.Body>
          <Card.Title>{menu.name}</Card.Title>
          <Card.Text>
            {menu.price}
          </Card.Text>
          <Card.Text>
            Allergens : &nbsp;{menu.allergy}
          </Card.Text>
        </Card.Body>
        <Button style={{marginBottom:"1rem"}}>Add to cart</Button>
      </Card>
    )
  }
}
