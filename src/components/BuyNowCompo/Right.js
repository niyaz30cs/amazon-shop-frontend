import React, { useEffect, useState } from 'react'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
// import {useHistory} from "react-router";
function Right({ item }) {

    const [val, setVal] = useState(false);

    const [price, setPrice] = useState(0);

    // const navigate=useNavigate()
    // const history=useHistory()
    useEffect(() => {
        totalAmount();
    })

    const totalAmount = () => {
        let price = 0;
        item.map((items) => {
            price = items.price.cost + price
        });
        setPrice(price)
    }

    const proceesby = () => {
        toast.success("Your Order is Confirmed", {
            position: "top-center",
        })
        // history.push("/")
    }
    return (
        <div className='right_buy'>
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/checkout/assets/TM_desktop._CB443006202_.png" alt="rightimg" />
            <div className='cost_right'>
                <p>Your order is eligible for FREE Delivery</p><br />
                <span style={{ color: "#565959" }}>Select this option at checkout Details</span>
                <h3>SubTotal ({item.length} items):<span style={{ fontWeight: 700 }}>₹{price}.00</span></h3>
                <button className='rightbuy_btn' onClick={proceesby}>Process to Buy</button>
                <div className='emi' onClick={() => setVal(!val)}>
                    Emi Available
                    {!val ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                </div>
                <span className={val ? "show" : "hide"}> Your order qualifies for EMI with valid credit cards (not available on purchase of Gold,
                    Jewelry, Gift cards and Amazon pay balance top up). Learn more.
                </span>
            </div>

            <ToastContainer/>
        </div>
    )
}

export default Right
