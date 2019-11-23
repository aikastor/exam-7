import React from 'react';
import './OrderItems.css';

const OrderItems = (props) => {
  console.log(props);
  const components = [];
  const list = props.orders;

  list.forEach((item, index) =>{
    if (item.qnt > 0) {
      components.push(
        <div className='orderItem' key={item+index}>
          <span>{item.name}</span>: x {item.qnt} ({item.priceTotal} KGS )
          <button onClick={() => props.removeOrder(item)} className='RemoveButton'>x</button>
        </div>
      );
    }
  });

  if (components.length > 0) {
    components.push(<p key='price' className='priceTag'><span>total price:</span> {props.totalPrice} KGS</p>)
  } else {
    components.push(<div key='template'>Order is empty! Please order some items!</div>)
  }

  return  (
    <div className='OrderContainer'>
      <p className='orderDetails'>Order details:</p>
      {components}
    </div>
  )
};

export default OrderItems;