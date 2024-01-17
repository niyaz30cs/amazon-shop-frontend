import React, { useEffect, useState } from 'react'
import "./BuyNow.css";
import { Divider } from '@mui/material';
import Option from './Option';
import SubTotal from './SubTotal';
import Right from './Right';
import Empty from './Empty';
function BuyNow() {

  const [cartData, setCartData] = useState("");
  // console.log(cartData);

  const getDataBuy = async () => {
    const res = await fetch("https://amazon-shop-backend.onrender.com/cartdetails", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      credentials: "include"
    })
    const data = await res.json();
    if (res.status !== 201) {
      console.log("Error");
    } else {
      setCartData(data.carts)
    }
  };

  useEffect(() => {
    getDataBuy();
  }, [])

  return (
    <>
      {
        cartData.length ?
          <div className='buynow_section'>
            <div className='buynow_container'>
              <div className='left_buy'>
                <h1>Shopping Cart</h1>
                <p>Select all item</p>
                <span className='leftbuyprice'>Price</span>
                <Divider />
                {
                  cartData.map((e, index) => {
                    return (

                      <div key={index}>
                        <div className='item_containert'>
                          <img src={e.detailUrl} alt='not found' />
                          <div className='item_details'>
                            <h3>{e.title.longTitle}</h3>
                            <h3>{e.title.shortTitle}</h3>
                            <h3 className='diffrentprice'>₹{e.price.cost}</h3>
                            
                            <p className='unusuall'>Usually dispatched in 8 days.</p>
                            <p>Eligible for free shipping</p>
                            <img src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px-2x._CB485942108_.png" alt="logo" />
                            <Option deletedata={e.id} get={getDataBuy} />
                          </div>
                        
                          <h3 className='item_price'>₹{e.price.cost}.00</h3>
                        </div>
                        <Divider />
                      </div>

                    )
                  })
                }
                <SubTotal item={cartData} />
              </div>
              <Right item={cartData} />
            </div>
          </div> : <Empty/>
      }
    </>
  )
}

export default BuyNow
