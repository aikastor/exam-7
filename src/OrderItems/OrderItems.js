import React from 'react';
import './OrderItems.css';

const OrderItems = (props) => {
  console.log(props);
  const components = [];
  const list = props.orders;

  list.forEach((item, index) =>{
    if(item.qnt > 0) {
      components.push(
        <div className='orderItem' key={item+index}>
          <span>{item.name}</span>: {item.qnt}
          <button onClick={() => props.removeOrder(item)} disabled={!item.qnt > 0}>x</button>
        </div>
      );
    }
  });

  if (components.length > 0) {
    console.log(props.totalPrice);
    components.push(<span key='price'>total price: {props.totalPrice}</span>)
  } else {
    components.push(<div key='template'>Order is empty! Please order some items!</div>)
  }

  return  (
    <div className='OrderContainer'>
      {components}
    </div>
  )
};

export default OrderItems;