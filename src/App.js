import React, {Component} from 'react';
import MenuItems from "./MenuItems/MenuItems";
import './App.css';


class App extends Component {
  state = {
    orderItems: [
      {name: 'Burger', qnt: 0},
      {name: 'Coffee', qnt: 0},
      {name: 'Eggs', qnt: 0},
      {name: 'Ice cream', qnt: 0},
      {name: 'Noodles', qnt: 0},
      {name: 'Pizza', qnt: 0}
    ],
    totalPrice: 0,
  };
  addOrder = (obj) => {
    let orderItems = [...this.state.orderItems];
    const index = orderItems.findIndex(i=> i.name === obj.name);
    orderItems[index].qnt ++;
    let totalPrice = this.state.totalPrice;
    totalPrice += obj.price;
    this.setState({orderItems, totalPrice});
  };
  removeOrder = () => {

  };
  render() {
    return (
      <div className='App'>
        <MenuItems addOrder={this.addOrder}/>
      </div>
    );
  }
}

export default App;