import React from 'react';

import './MenuItems.css';
import burger from '../assets/burger.png';
import coffee from '../assets/coffee.png';
import eggs from '../assets/eggs.png';
import iceCream from '../assets/ice-cream.png';
import noodles from '../assets/noodles.png';
import pizza from '../assets/pizza.png';

const MENUITEMS = [
  {name: 'Burger', price: 120, image: burger},
  {name: 'Coffee', price: 40, image: coffee},
  {name: 'Eggs', price: 70, image: eggs},
  {name: 'Ice cream', price: 30, image: iceCream},
  {name: 'Noodles', price: 150, image: noodles},
  {name: 'Pizza', price: 50, image: pizza}
  ];

const MenuItems = (props) => {
  const itemComponents = [];

  MENUITEMS.map((item, index) => (
    itemComponents.push(
      <div key={item.name+index} className='MenuItem' onClick={()=> props.addOrder(item)}>
        <div className='MenuImg'>
          <img src={item.image} alt={item.name}/>
        </div>
        <div className='MenuInfo'>
          <p>{item.name}</p>
          <span>{item.price}</span>
        </div>
    </div>)
  ));
  return (
    <div className='MenuContainer'>
      {itemComponents}
    </div>
  )
};



export default MenuItems;