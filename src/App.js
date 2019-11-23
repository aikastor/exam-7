import React, {Component} from 'react';
import MenuItems from "./MenuItems/MenuItems";
import './App.css';
import OrderItems from "./OrderItems/OrderItems";

class App extends Component {
  state = {
    orderItems: [
      {name: 'Burger', qnt: 0, price: 120,priceTotal: 0},
      {name: 'Coffee', qnt: 0, price: 40, priceTotal: 0},
      {name: 'Eggs', qnt: 0,price: 70,  priceTotal: 0},
      {name: 'Ice cream', qnt: 0, price: 30,  priceTotal: 0},
      {name: 'Noodles', qnt: 0, price: 150, priceTotal: 0},
      {name: 'Pizza', qnt: 0, price: 50, priceTotal: 0}
    ],
    totalPrice: 0,
  };
  addOrder = (obj) => {
    let orderItems = [...this.state.orderItems];
    const index = orderItems.findIndex(i=> i.name === obj.name);

    let itemToChange = orderItems[index];
    itemToChange.qnt ++;
    itemToChange.priceTotal = itemToChange.qnt * obj.price;

    let totalPrice = this.state.totalPrice;
    totalPrice += obj.price;
    this.setState({orderItems, totalPrice});
  };

  removeOrder = (obj) => {
    let orderItems = [...this.state.orderItems];
    const index = orderItems.findIndex(i=> i.name === obj.name);

    let itemToChange = orderItems[index];
    itemToChange.qnt --;
    itemToChange.priceTotal = itemToChange.qnt * itemToChange.price;

    let totalPrice = this.state.totalPrice;
    totalPrice -= itemToChange.price;
    this.setState({orderItems, totalPrice});
  };
  render() {
    return (
      <div className='App'>
        <OrderItems
          orders={this.state.orderItems}
          removeOrder={this.removeOrder}
          totalPrice={this.state.totalPrice}
        />
        <MenuItems addOrder={this.addOrder}/>
      </div>
    );
  }
}

export default App;