import React, { useEffect, useState } from 'react'

function SubTotal({item}) {
  const[price,setPrice]=useState(0);

  useEffect(()=>{
    totalAmount();
  },[item])  

  const totalAmount=()=>{
    let price=0;
    item.map((items)=>{
      price+=items.price.cost
    });
    setPrice(price)
  }
  return (
    <div className='sub_item'>
      <h3>SubTotal ({item.length}item):<strong style={{ fontWeight: 700, color: "#111" }}>₹{price}.00</strong></h3>

    </div>
  )
}

export default SubTotal
