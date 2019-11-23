import React from 'react';

import MENUITEMS from "../constants";
import './MenuItems.css';

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
          <span>Price: {item.price} KGS</span>
        </div>
    </div>)
  ));
  return (
    <div className='MenuContainer'>
      <div className='ItemsContainer'>
        {itemComponents}
      </div>

    </div>
  )
};




export default MenuItems;