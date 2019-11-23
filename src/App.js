import React, {Component} from 'react';
import MenuItems from "./MenuItems/MenuItems";
import './App.css';

class App extends Component {
  state = {
    orderItems: [],
    totalPrice: 0,
  };
  addOrder = () => {

  };
  removeOrder = () => {

  };
  render() {
    return (
      <div className='App'>
        <MenuItems/>
      </div>
    );
  }
}

export default App;