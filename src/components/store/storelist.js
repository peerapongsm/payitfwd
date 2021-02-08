import React from "react";
import { Redirect } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck'

export default class StoreList extends React.Component {

  render () {
    let stores = this.props.stores;
    let storeCards = stores.map((store) => {
      return <StoreCard key={store.restaurant} store={store}/>;
    })
    //console.log(stores[0].restaurant);
    return (
      <CardDeck style={{ margin: "2.5rem"}}>
        {storeCards}
      </CardDeck>
    );
  }
}

class StoreCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {redirect: false};
  }

  handleCLick= () => {
    this.setState({redirect: !this.state.redirect});
  }

  render() {
    let store = this.props.store;
    if (this.state.redirect) {
      let path = "/store/" + store.restaurant;
      return (
        <Redirect push to={path} />
      );
    } else {
      return (
        <Card style={{ "min-width": '18rem', "align-items": 'center', margin: "1rem", cursor: "pointer"}} onClick={this.handleCLick}>
          <Card.Img variant="top" src={store.img} style={{ "width": '18rem', "height": "10rem"}}/>
          <Card.Body>
            <Card.Title>{store.restaurant}</Card.Title>
            <Card.Text>
              {store.hours}
            </Card.Text>
            <Card.Text>
              {store.address}
            </Card.Text>
          </Card.Body>
        </Card>
      )
    }
  }
}
