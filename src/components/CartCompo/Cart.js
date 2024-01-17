import React, { useContext, useEffect, useState } from 'react'
import "./Cart.css";
import { CircularProgress, Divider } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { LoginContext } from '../context/ContextProvider';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
function Cart() {

    const { id } = useParams("");
    console.log(id);
    const [indData, setIndData] = useState("");
    console.log(indData);
    const history = useNavigate();
    const { account, setAccount } = useContext(LoginContext);
    console.log(account);

    const getIndividualData = async () => {
        const res = await fetch(`https://amazon-shop-backend.onrender.com/getproductsone/${id}`, {
            method: "GET",
            headers: {
                "Content-type": "application/json"
            }
        });
        const data = await res.json();
        // console.log(data);
        if (res.status !== 201) {
            console.log("No Data Available");
        }
        else {
            console.log("getData");
            setIndData(data);
        }
    }

    useEffect(() => {
    setTimeout(getIndividualData,1000)
    },[id]);

    const addTocart = async (id) => {
        console.log("hello");
        const checkRes = await fetch(`https://amazon-shop-backend.onrender.com/addcart/${id}`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                indData
            }),
            credentials: "include"
        })

        const data1 = await checkRes.json();
        console.log(data1);

        if (checkRes.status === 401 || !data1) {
            console.log("user invalid");
            // alert("user invalid")
            toast.warn("user invalid", {
                position: "top-center",
            })
        } else {
            toast.success("item Added", {
                position: "top-center",
            })
            // alert(" data added in your cart")
            history("/buynow")
            setAccount(data1)
        }
    }

    // const addTocart=()=>{
    //     history("/buynow");
    // }


    return (
        <div className='cart_section'>
            {indData && Object.keys(indData).length &&

                <div className='cart_container'>
                    <div className='left_cart'>
                        <img src={indData.detailUrl} alt='not found' />
                        <div className='cart_btn'>
                            <button className='cart_btn1' onClick={() => addTocart(indData.id)}>Add to Cart</button>
                        
                            <button className='cart_btn2'>Buy Now</button>
                        </div>
                    </div>
                    <div className='right_cart'>
                        <h3>{indData.title.shortTitle}</h3>
                        <h4>{indData.title.longTitle}</h4>
                        <Divider />
                        <p className='mrp'>M.R.P.:{indData.price.mrp}</p>
                        <p>Deal of the Day : <span style={{ color: "#B12704" }}>₹{indData.price.cost}.00</span></p>
                        <p>You Save: :<span style={{ color: "#B12704" }}>₹{indData.price.mrp - indData.price.cost}.00({indData.price.discount})</span></p>
                        <div className='discount_box'>
                            <h5>Discount:<span style={{ color: "#111" }}>{indData.discounts}</span></h5>
                            <h4>Free Delivery:<span style={{ color: "#111", fontWeight: 600 }}>Oct8 -21</span>Details</h4>
                            <p>Fastest Delivery:<span style={{ color: "#111", fontWeight: 600 }}>Tomorrow 11AM</span></p>
                        </div>
                        <p className='description'>About the Item:<span style={{ color: "#565959", fontSize: 14, fontWeight: 500, letterSpacing: "0.4px" }}>{indData.description}</span></p>
                    </div>
                </div>
            }
            {
                !indData ? <div className='circle'>
                    <CircularProgress />
                    <h2>Loading</h2>
                </div>:"" 
            }
            <ToastContainer />
        </div>
    )
}


export default Cart
